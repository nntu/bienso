import pandas as pd
import json
from datetime import datetime
import pytz

# Your JSON data
json_data = '''{
  "totalElements": 1,
  "data": [
    {
      "plateNumber": "29K34567",
      "registerToDate": "2024-11-18T09:30:00Z",
      "registerFromDate": "2024-09-05 15:22:00.0",
      "auctionFromTime": "2024-11-21T02:15:00Z",
      "auctionToTime": "2024-11-21 09:40:00.0",
      "auctionRoomId": null,
      "type": 3,
      "wishListCount": 10,
      "favorited": null,
      "registed": null,
      "isCancel": null,
      "id": "814913550020932",
      "status": 3,
      "paymentStatus": null,
      "isEnded": null,
      "isStarted": null,
      "nameProvince": "Thành phố Hà Nội",
      "idProvince": 1,
      "provinceSymbol": 29,
      "series": "K",
      "orders": "34567",
      "statusOrder": null,
      "timeout": null
    }
  ]
}'''

def format_remaining_time_vn(timedelta):
    """Format timedelta to Vietnamese string format"""
    days = timedelta.days
    hours = timedelta.components.hours
    minutes = timedelta.components.minutes
    return f"{days} ngày {hours} giờ {minutes} phút"

# Parse JSON data and extract the 'data' array
parsed_json = json.loads(json_data)
data = parsed_json['data']

# Convert to DataFrame
df = pd.DataFrame(data)

# Convert time columns to datetime
time_columns = ['registerToDate', 'registerFromDate', 'auctionFromTime', 'auctionToTime']
for col in time_columns:
    df[col] = pd.to_datetime(df[col])

# Get current time in GMT+7
bangkok_tz = pytz.timezone('Asia/Bangkok')
current_time = datetime.now(pytz.UTC).astimezone(bangkok_tz)

# Calculate remaining time
df['thoigianconlai'] = df['auctionFromTime'].apply(lambda x: 
    (x.replace(tzinfo=pytz.UTC).astimezone(bangkok_tz) - current_time)
    if x > current_time.astimezone(pytz.UTC) 
    else pd.Timedelta(seconds=0))
print(df)
# Display results in Vietnamese format
for _, row in df.iterrows():
    print(f"\nBiển số: {row['plateNumber']}")
    if row['thoigianconlai'].total_seconds() > 0:
        remaining_time_vn = format_remaining_time_vn(row['thoigianconlai'])
        print(f"Thời gian còn lại: {remaining_time_vn}")
    else:
        print("Đã hết thời gian đấu giá")