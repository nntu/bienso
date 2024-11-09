import requests
import json
import time
import pandas as pd
from typing import List, Dict
import logging
from datetime import datetime
import pytz
import configparser
import os

def create_default_config(config_path='config.ini'):
    """Create a default configuration file if it doesn't exist"""
    if os.path.exists(config_path):
        print(f"Config file already exists at {config_path}")
        return
        
    config = configparser.ConfigParser()
    config['API'] = {
        'base_url': 'https://dgbs.vpa.com.vn/api/bidding/public-result/list-await-auction/customer/detail',
        'limit': '500',
        'province_id': '1',
        'type_vehicle': ''
    }
    config['Export'] = {
        'output_path': 'bidding_data_{timestamp}.xlsx'
    }
    config['Timezone'] = {
        'timezone': 'Asia/Ho_Chi_Minh'
    }
    
    try:
        with open(config_path, 'w', encoding='utf-8') as configfile:
            config.write(configfile)
        print(f"Created default config file at {config_path}")
    except Exception as e:
        print(f"Error creating config file: {str(e)}")

def check_and_create_config():
    """Check if config exists and create if not found"""
    config_path = 'config.ini'
    if not os.path.exists(config_path):
        print("Config file not found. Creating default config.ini...")
        create_default_config(config_path)
    else:
        print("Config file found.")
    return config_path

class BiddingDataProcessor:
    def __init__(self, config_path='config.ini'):
        # Load configuration
        self.config = configparser.ConfigParser()
        self.config.read(config_path)
        
        # Set up API session
        self.session = requests.Session()
        self.base_url = self.config.get('API', 'base_url')
        self.session.headers.update({
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
        })
        
        # Set up logging
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s'
        )
        self.logger = logging.getLogger(__name__)
        
        # Initialize DataFrame
        self.df = None
        
        # Define Vietnam timezone from config
        self.vietnam_tz = pytz.timezone(self.config.get('Timezone', 'timezone'))

    def fetch_page(self, page: int) -> Dict:
        """Fetch a single page of data from the API"""
        payload = {
            "provinceId": self.config.get('API', 'province_id'),
            "page": page,
            "limit": self.config.getint('API', 'limit'),
            "search": "",
            "typeVehicle": self.config.get('API', 'type_vehicle')
        }
        
        try:
            response = self.session.post(
                self.base_url,
                data=json.dumps(payload)
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            self.logger.error(f"Error fetching page {page}: {str(e)}")
            return None

    def fetch_all_data(self, start_page: int = 0) -> List[Dict]:
        """Fetch all pages of data from the API"""
        all_data = []
        current_page = start_page
        total_elements = None
        
        while True:
            self.logger.info(f"Fetching page {current_page}")
            
            # Add delay to prevent overwhelming the server
            time.sleep(1)
            
            page_data = self.fetch_page(current_page)
            
            if page_data is None:
                self.logger.error(f"Failed to fetch page {current_page}. Stopping pagination.")
                break
                
            if total_elements is None:
                total_elements = page_data.get('totalElements', 0)
                self.logger.info(f"Total elements: {total_elements}")
            
            # Extract the actual data items
            items = page_data.get('data', [])
            if not items:
                break
                
            all_data.extend(items)
            self.logger.info(f"Fetched {len(items)} items. Total collected: {len(all_data)}")
            
            # Check if we've reached the end
            if len(all_data) >= total_elements:
                break
                
            current_page += 1
        
        # Convert to DataFrame
        self.df = pd.DataFrame(all_data)
        return self

    def process_dates(self):
        """Convert date strings to datetime objects with GMT+7 timezone handling"""
        date_columns = [
            'registerToDate', 
            'registerFromDate', 
            'auctionFromTime', 
            'auctionToTime'
        ]
        
        for col in date_columns:
            # Convert to datetime and localize timezone-naive dates to GMT+7
            self.df[col] = pd.to_datetime(self.df[col]).apply(
                lambda x: x.tz_localize(self.vietnam_tz) if x.tz is None else x.tz_convert(self.vietnam_tz)
            )
        
        return self
    
    def add_derived_columns(self):
        """Add useful derived columns with Vietnamese time formatting"""
        # Get current time in GMT+7
        now_vn = datetime.now(self.vietnam_tz)
        
        # Calculate time differences in seconds
        time_diff_seconds = (self.df['registerToDate'] - now_vn).dt.total_seconds()
        
        # Add formatted time remaining column in Vietnamese
        self.df['Thời gian đăng ký còn lại'] = time_diff_seconds.apply(format_remaining_time)
        
        # Add auction duration
        self.df['auction_duration_hours'] = (
            (self.df['auctionToTime'] - self.df['auctionFromTime'])
            .dt.total_seconds() / (60 * 60)
        ).round(2)
        
        # Store numerical values for sorting
        self.df['seconds_remaining'] = time_diff_seconds
        
        # Add full plate number components
        self.df['province_code'] = self.df['provinceSymbol'].astype(str)
        
        return self
    
    def export_to_excel(self):
        """Export DataFrame to formatted Excel file"""
        timestamp = datetime.now(self.vietnam_tz).strftime('%Y%m%d_%H%M%S')
        output_path = self.config.get('Export', 'output_path').format(timestamp=timestamp)
        
        # Create a copy of the DataFrame for Excel export
        df_excel = self.df.copy()
        
        # Convert timezone-aware dates to naive dates for Excel
        date_columns = ['registerToDate', 'registerFromDate', 
                       'auctionFromTime', 'auctionToTime']
        for col in date_columns:
            df_excel[col] = df_excel[col].dt.tz_localize(None)
        
        # Create Excel writer object
        with pd.ExcelWriter(output_path, engine='xlsxwriter') as writer:
            # Convert DataFrame to Excel
            df_excel.to_excel(writer, sheet_name='Bidding Data', index=False)
            
            # Get workbook and worksheet objects
            workbook = writer.book
            worksheet = writer.sheets['Bidding Data']
            
            # Define formats
            header_format = workbook.add_format({
                'bold': True,
                'text_wrap': True,
                'valign': 'top',
                'fg_color': '#D7E4BC',
                'border': 1
            })
            
            date_format = workbook.add_format({
                'num_format': 'yyyy-mm-dd hh:mm:ss'
            })
            
            # Set column widths and formats
            for idx, col in enumerate(df_excel.columns):
                # Get maximum length of column content
                max_length = max(
                    df_excel[col].astype(str).apply(len).max(),
                    len(str(col))
                ) + 2
                
                # Set column width
                worksheet.set_column(idx, idx, max_length)
                
                # Apply date format to date columns
                if col in date_columns:
                    worksheet.set_column(idx, idx, max_length, date_format)
            
            # Apply header format
            for col_num, value in enumerate(df_excel.columns.values):
                worksheet.write(0, col_num, value, header_format)
        
        self.logger.info(f"Data exported to {output_path}")
        return self

def main():
    # Check and create config if needed
    config_path = check_and_create_config()
    
    # Initialize processor with config
    processor = BiddingDataProcessor(config_path)
    
    # Run the data processing pipeline
    (processor
     .fetch_all_data()
     .process_dates()
     .add_derived_columns()
     .export_to_excel())

if __name__ == "__main__":
    main()