import requests
import pandas as pd 
import time
 
import json
# --------------------------
# {'value': 1, 'label': 'Thành phố Hà Nội', 'renderLabel': 'Hà Nội', 'codes': [29, 30, 31, 32, 33, 40]}
# --------------------------
# {'value': 79, 'label': 'Thành phố Hồ Chí Minh', 'renderLabel': 'TP.HCM', 'codes': [41, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]}
# --------------------------
# {'value': 48, 'label': 'Thành phố Đà Nẵng', 'renderLabel': 'Đà Nẵng', 'codes': [43]}
# --------------------------
# {'value': 31, 'label': 'Thành phố Hải Phòng', 'renderLabel': 'Hải Phòng', 'codes': [15, 16]}
# --------------------------
# {'value': 92, 'label': 'Thành phố Cần Thơ', 'renderLabel': 'Cần Thơ', 'codes': [65]}
# --------------------------
# {'value': 89, 'label': 'Tỉnh An Giang', 'renderLabel': 'An Giang', 'codes': [67]}
# --------------------------
# {'value': 77, 'label': 'Tỉnh Bà Rịa - Vũng Tàu', 'renderLabel': 'Bà Rịa - Vũng Tàu', 'codes': [72]}
# --------------------------
# {'value': 74, 'label': 'Tỉnh Bình Dương', 'renderLabel': 'Bình Dương', 'codes': [61]}
# --------------------------
# {'value': 70, 'label': 'Tỉnh Bình Phước', 'renderLabel': 'Bình Phước', 'codes': [93]}
# --------------------------
# {'value': 60, 'label': 'Tỉnh Bình Thuận', 'renderLabel': 'Bình Thuận', 'codes': [86]}
# --------------------------
# {'value': 52, 'label': 'Tỉnh Bình Định', 'renderLabel': 'Bình Định', 'codes': [77]}
# --------------------------
# {'value': 95, 'label': 'Tỉnh Bạc Liêu', 'renderLabel': 'Bạc Liêu', 'codes': [94]}
# --------------------------
# {'value': 24, 'label': 'Tỉnh Bắc Giang', 'renderLabel': 'Bắc Giang', 'codes': [98]}
# --------------------------
# {'value': 6, 'label': 'Tỉnh Bắc Kạn', 'renderLabel': 'Bắc Kạn', 'codes': [97]}
# --------------------------
# {'value': 27, 'label': 'Tỉnh Bắc Ninh', 'renderLabel': 'Bắc Ninh', 'codes': [99]}
# --------------------------
# {'value': 83, 'label': 'Tỉnh Bến Tre', 'renderLabel': 'Bến Tre', 'codes': [71]}
# --------------------------
# {'value': 4, 'label': 'Tỉnh Cao Bằng', 'renderLabel': 'Cao Bằng', 'codes': [11]}
# --------------------------
# {'value': 96, 'label': 'Tỉnh Cà Mau', 'renderLabel': 'Cà Mau', 'codes': [69]}
# --------------------------
# {'value': 64, 'label': 'Tỉnh Gia Lai', 'renderLabel': 'Gia Lai', 'codes': [81]}
# --------------------------
# {'value': 2, 'label': 'Tỉnh Hà Giang', 'renderLabel': 'Hà Giang', 'codes': [23]}
# --------------------------
# {'value': 35, 'label': 'Tỉnh Hà Nam', 'renderLabel': 'Hà Nam', 'codes': [90]}
# --------------------------
# {'value': 42, 'label': 'Tỉnh Hà Tĩnh', 'renderLabel': 'Hà Tĩnh', 'codes': [38]}
# --------------------------
# {'value': 17, 'label': 'Tỉnh Hòa Bình', 'renderLabel': 'Hòa Bình', 'codes': [28]}
# --------------------------
# {'value': 33, 'label': 'Tỉnh Hưng Yên', 'renderLabel': 'Hưng Yên', 'codes': [89]}
# --------------------------
# {'value': 30, 'label': 'Tỉnh Hải Dương', 'renderLabel': 'Hải Dương', 'codes': [34]}
# --------------------------
# {'value': 93, 'label': 'Tỉnh Hậu Giang', 'renderLabel': 'Hậu Giang', 'codes': [95]}
# --------------------------
# {'value': 56, 'label': 'Tỉnh Khánh Hòa', 'renderLabel': 'Khánh Hòa', 'codes': [79]}
# --------------------------
# {'value': 91, 'label': 'Tỉnh Kiên Giang', 'renderLabel': 'Kiên Giang', 'codes': [68]}
# --------------------------
# {'value': 62, 'label': 'Tỉnh Kon Tum', 'renderLabel': 'Kon Tum', 'codes': [82]}
# --------------------------
# {'value': 12, 'label': 'Tỉnh Lai Châu', 'renderLabel': 'Lai Châu', 'codes': [25]}
# --------------------------
# {'value': 80, 'label': 'Tỉnh Long An', 'renderLabel': 'Long An', 'codes': [62]}
# --------------------------
# {'value': 10, 'label': 'Tỉnh Lào Cai', 'renderLabel': 'Lào Cai', 'codes': [24]}
# --------------------------
# {'value': 68, 'label': 'Tỉnh Lâm Đồng', 'renderLabel': 'Lâm Đồng', 'codes': [49]}
# --------------------------
# {'value': 20, 'label': 'Tỉnh Lạng Sơn', 'renderLabel': 'Lạng Sơn', 'codes': [12]}
# --------------------------
# {'value': 36, 'label': 'Tỉnh Nam Định', 'renderLabel': 'Nam Định', 'codes': [18]}
# --------------------------
# {'value': 40, 'label': 'Tỉnh Nghệ An', 'renderLabel': 'Nghệ An', 'codes': [37]}
# --------------------------
# {'value': 37, 'label': 'Tỉnh Ninh Bình', 'renderLabel': 'Ninh Bình', 'codes': [35]}
# --------------------------
# {'value': 58, 'label': 'Tỉnh Ninh Thuận', 'renderLabel': 'Ninh Thuận', 'codes': [85]}
# --------------------------
# {'value': 25, 'label': 'Tỉnh Phú Thọ', 'renderLabel': 'Phú Thọ', 'codes': [19]}
# --------------------------
# {'value': 54, 'label': 'Tỉnh Phú Yên', 'renderLabel': 'Phú Yên', 'codes': [78]}
# --------------------------
# {'value': 44, 'label': 'Tỉnh Quảng Bình', 'renderLabel': 'Quảng Bình', 'codes': [73]}
# --------------------------
# {'value': 49, 'label': 'Tỉnh Quảng Nam', 'renderLabel': 'Quảng Nam', 'codes': [92]}
# --------------------------
# {'value': 51, 'label': 'Tỉnh Quảng Ngãi', 'renderLabel': 'Quảng Ngãi', 'codes': [76]}
# --------------------------
# {'value': 22, 'label': 'Tỉnh Quảng Ninh', 'renderLabel': 'Quảng Ninh', 'codes': [14]}
# --------------------------
# {'value': 45, 'label': 'Tỉnh Quảng Trị', 'renderLabel': 'Quảng Trị', 'codes': [74]}
# --------------------------
# {'value': 94, 'label': 'Tỉnh Sóc Trăng', 'renderLabel': 'Sóc Trăng', 'codes': [83]}
# --------------------------
# {'value': 14, 'label': 'Tỉnh Sơn La', 'renderLabel': 'Sơn La', 'codes': [26]}
# --------------------------
# {'value': 38, 'label': 'Tỉnh Thanh Hóa', 'renderLabel': 'Thanh Hóa', 'codes': [36]}
# --------------------------
# {'value': 34, 'label': 'Tỉnh Thái Bình', 'renderLabel': 'Thái Bình', 'codes': [17]}
# --------------------------
# {'value': 19, 'label': 'Tỉnh Thái Nguyên', 'renderLabel': 'Thái Nguyên', 'codes': [20]}
# --------------------------
# {'value': 46, 'label': 'Tỉnh Thừa Thiên Huế', 'renderLabel': 'Thừa Thiên Huế', 'codes': [75]}
# --------------------------
# {'value': 82, 'label': 'Tỉnh Tiền Giang', 'renderLabel': 'Tiền Giang', 'codes': [63]}
# --------------------------
# {'value': 84, 'label': 'Tỉnh Trà Vinh', 'renderLabel': 'Trà Vinh', 'codes': [84]}
# --------------------------
# {'value': 8, 'label': 'Tỉnh Tuyên Quang', 'renderLabel': 'Tuyên Quang', 'codes': [22]}
# --------------------------
# {'value': 72, 'label': 'Tỉnh Tây Ninh', 'renderLabel': 'Tây Ninh', 'codes': [70]}
# --------------------------
# {'value': 86, 'label': 'Tỉnh Vĩnh Long', 'renderLabel': 'Vĩnh Long', 'codes': [64]}
# --------------------------
# {'value': 26, 'label': 'Tỉnh Vĩnh Phúc', 'renderLabel': 'Vĩnh Phúc', 'codes': [88]}
# --------------------------
# {'value': 15, 'label': 'Tỉnh Yên Bái', 'renderLabel': 'Yên Bái', 'codes': [21]}
# --------------------------
# {'value': 11, 'label': 'Tỉnh Điện Biên', 'renderLabel': 'Điện Biên', 'codes': [27]}
# --------------------------
# {'value': 66, 'label': 'Tỉnh Đắk Lắk', 'renderLabel': 'Đắk Lắk', 'codes': [47]}
# --------------------------
# {'value': 67, 'label': 'Tỉnh Đắk Nông', 'renderLabel': 'Đắk Nông', 'codes': [48]}
# --------------------------
# {'value': 75, 'label': 'Tỉnh Đồng Nai', 'renderLabel': 'Đồng Nai', 'codes': [39, 60]}
# --------------------------
# {'value': 87, 'label': 'Tỉnh Đồng Tháp', 'renderLabel': 'Đồng Tháp', 'codes': [66]}
# PS D:\python\bienso> & C:/Python3/python.exe d:/python/bienso/tinh.py
# --------------------------
# {'value': 1, 'label': 'Thành phố Hà Nội', 'renderLabel': 'Hà Nội', 'codes': [29, 30, 31, 32, 33, 40]}
# --------------------------
# {'value': 79, 'label': 'Thành phố Hồ Chí Minh', 'renderLabel': 'TP.HCM', 'codes': [41, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]}
# --------------------------
# {'value': 48, 'label': 'Thành phố Đà Nẵng', 'renderLabel': 'Đà Nẵng', 'codes': [43]}
# --------------------------
# {'value': 31, 'label': 'Thành phố Hải Phòng', 'renderLabel': 'Hải Phòng', 'codes': [15, 16]}
# --------------------------
# {'value': 92, 'label': 'Thành phố Cần Thơ', 'renderLabel': 'Cần Thơ', 'codes': [65]}
# --------------------------
# {'value': 89, 'label': 'Tỉnh An Giang', 'renderLabel': 'An Giang', 'codes': [67]}
# --------------------------
# {'value': 77, 'label': 'Tỉnh Bà Rịa - Vũng Tàu', 'renderLabel': 'Bà Rịa - Vũng Tàu', 'codes': [72]}
# --------------------------
# {'value': 74, 'label': 'Tỉnh Bình Dương', 'renderLabel': 'Bình Dương', 'codes': [61]}
# --------------------------
# {'value': 70, 'label': 'Tỉnh Bình Phước', 'renderLabel': 'Bình Phước', 'codes': [93]}
# --------------------------
# {'value': 60, 'label': 'Tỉnh Bình Thuận', 'renderLabel': 'Bình Thuận', 'codes': [86]}
# --------------------------
# {'value': 52, 'label': 'Tỉnh Bình Định', 'renderLabel': 'Bình Định', 'codes': [77]}
# --------------------------
# {'value': 95, 'label': 'Tỉnh Bạc Liêu', 'renderLabel': 'Bạc Liêu', 'codes': [94]}
# --------------------------
# {'value': 24, 'label': 'Tỉnh Bắc Giang', 'renderLabel': 'Bắc Giang', 'codes': [98]}
# --------------------------
# {'value': 6, 'label': 'Tỉnh Bắc Kạn', 'renderLabel': 'Bắc Kạn', 'codes': [97]}
# --------------------------
# {'value': 27, 'label': 'Tỉnh Bắc Ninh', 'renderLabel': 'Bắc Ninh', 'codes': [99]}
# --------------------------
# {'value': 83, 'label': 'Tỉnh Bến Tre', 'renderLabel': 'Bến Tre', 'codes': [71]}
# --------------------------
# {'value': 4, 'label': 'Tỉnh Cao Bằng', 'renderLabel': 'Cao Bằng', 'codes': [11]}
# --------------------------
# {'value': 96, 'label': 'Tỉnh Cà Mau', 'renderLabel': 'Cà Mau', 'codes': [69]}
# --------------------------
# {'value': 64, 'label': 'Tỉnh Gia Lai', 'renderLabel': 'Gia Lai', 'codes': [81]}
# --------------------------
# {'value': 2, 'label': 'Tỉnh Hà Giang', 'renderLabel': 'Hà Giang', 'codes': [23]}
# --------------------------
# {'value': 35, 'label': 'Tỉnh Hà Nam', 'renderLabel': 'Hà Nam', 'codes': [90]}
# --------------------------
# {'value': 42, 'label': 'Tỉnh Hà Tĩnh', 'renderLabel': 'Hà Tĩnh', 'codes': [38]}
# --------------------------
# {'value': 17, 'label': 'Tỉnh Hòa Bình', 'renderLabel': 'Hòa Bình', 'codes': [28]}
# --------------------------
# {'value': 33, 'label': 'Tỉnh Hưng Yên', 'renderLabel': 'Hưng Yên', 'codes': [89]}
# --------------------------
# {'value': 30, 'label': 'Tỉnh Hải Dương', 'renderLabel': 'Hải Dương', 'codes': [34]}
# --------------------------
# {'value': 93, 'label': 'Tỉnh Hậu Giang', 'renderLabel': 'Hậu Giang', 'codes': [95]}
# --------------------------
# {'value': 56, 'label': 'Tỉnh Khánh Hòa', 'renderLabel': 'Khánh Hòa', 'codes': [79]}
# --------------------------
# {'value': 91, 'label': 'Tỉnh Kiên Giang', 'renderLabel': 'Kiên Giang', 'codes': [68]}
# --------------------------
# {'value': 62, 'label': 'Tỉnh Kon Tum', 'renderLabel': 'Kon Tum', 'codes': [82]}
# --------------------------
# {'value': 12, 'label': 'Tỉnh Lai Châu', 'renderLabel': 'Lai Châu', 'codes': [25]}
# --------------------------
# {'value': 80, 'label': 'Tỉnh Long An', 'renderLabel': 'Long An', 'codes': [62]}
# --------------------------
# {'value': 10, 'label': 'Tỉnh Lào Cai', 'renderLabel': 'Lào Cai', 'codes': [24]}
# --------------------------
# {'value': 68, 'label': 'Tỉnh Lâm Đồng', 'renderLabel': 'Lâm Đồng', 'codes': [49]}
# --------------------------
# {'value': 20, 'label': 'Tỉnh Lạng Sơn', 'renderLabel': 'Lạng Sơn', 'codes': [12]}
# --------------------------
# {'value': 36, 'label': 'Tỉnh Nam Định', 'renderLabel': 'Nam Định', 'codes': [18]}
# --------------------------
# {'value': 40, 'label': 'Tỉnh Nghệ An', 'renderLabel': 'Nghệ An', 'codes': [37]}
# --------------------------
# {'value': 37, 'label': 'Tỉnh Ninh Bình', 'renderLabel': 'Ninh Bình', 'codes': [35]}
# --------------------------
# {'value': 58, 'label': 'Tỉnh Ninh Thuận', 'renderLabel': 'Ninh Thuận', 'codes': [85]}
# --------------------------
# {'value': 25, 'label': 'Tỉnh Phú Thọ', 'renderLabel': 'Phú Thọ', 'codes': [19]}
# --------------------------
# {'value': 54, 'label': 'Tỉnh Phú Yên', 'renderLabel': 'Phú Yên', 'codes': [78]}
# --------------------------
# {'value': 44, 'label': 'Tỉnh Quảng Bình', 'renderLabel': 'Quảng Bình', 'codes': [73]}
# --------------------------
# {'value': 49, 'label': 'Tỉnh Quảng Nam', 'renderLabel': 'Quảng Nam', 'codes': [92]}
# --------------------------
# {'value': 51, 'label': 'Tỉnh Quảng Ngãi', 'renderLabel': 'Quảng Ngãi', 'codes': [76]}
# --------------------------
# {'value': 22, 'label': 'Tỉnh Quảng Ninh', 'renderLabel': 'Quảng Ninh', 'codes': [14]}
# --------------------------
# {'value': 45, 'label': 'Tỉnh Quảng Trị', 'renderLabel': 'Quảng Trị', 'codes': [74]}
# --------------------------
# {'value': 94, 'label': 'Tỉnh Sóc Trăng', 'renderLabel': 'Sóc Trăng', 'codes': [83]}
# --------------------------
# {'value': 14, 'label': 'Tỉnh Sơn La', 'renderLabel': 'Sơn La', 'codes': [26]}
# --------------------------
# {'value': 38, 'label': 'Tỉnh Thanh Hóa', 'renderLabel': 'Thanh Hóa', 'codes': [36]}
# --------------------------
# {'value': 34, 'label': 'Tỉnh Thái Bình', 'renderLabel': 'Thái Bình', 'codes': [17]}
# --------------------------
# {'value': 19, 'label': 'Tỉnh Thái Nguyên', 'renderLabel': 'Thái Nguyên', 'codes': [20]}
# --------------------------
# {'value': 46, 'label': 'Tỉnh Thừa Thiên Huế', 'renderLabel': 'Thừa Thiên Huế', 'codes': [75]}
# --------------------------
# {'value': 82, 'label': 'Tỉnh Tiền Giang', 'renderLabel': 'Tiền Giang', 'codes': [63]}
# --------------------------
# {'value': 84, 'label': 'Tỉnh Trà Vinh', 'renderLabel': 'Trà Vinh', 'codes': [84]}
# --------------------------
# {'value': 8, 'label': 'Tỉnh Tuyên Quang', 'renderLabel': 'Tuyên Quang', 'codes': [22]}
# --------------------------
# {'value': 72, 'label': 'Tỉnh Tây Ninh', 'renderLabel': 'Tây Ninh', 'codes': [70]}
# --------------------------
# {'value': 86, 'label': 'Tỉnh Vĩnh Long', 'renderLabel': 'Vĩnh Long', 'codes': [64]}
# --------------------------
# {'value': 26, 'label': 'Tỉnh Vĩnh Phúc', 'renderLabel': 'Vĩnh Phúc', 'codes': [88]}
# --------------------------
# {'value': 15, 'label': 'Tỉnh Yên Bái', 'renderLabel': 'Yên Bái', 'codes': [21]}
# --------------------------
# {'value': 11, 'label': 'Tỉnh Điện Biên', 'renderLabel': 'Điện Biên', 'codes': [27]}
# --------------------------
# {'value': 66, 'label': 'Tỉnh Đắk Lắk', 'renderLabel': 'Đắk Lắk', 'codes': [47]}
# --------------------------
# {'value': 67, 'label': 'Tỉnh Đắk Nông', 'renderLabel': 'Đắk Nông', 'codes': [48]}
# --------------------------
# {'value': 75, 'label': 'Tỉnh Đồng Nai', 'renderLabel': 'Đồng Nai', 'codes': [39, 60]}
# --------------------------
# {'value': 87, 'label': 'Tỉnh Đồng Tháp', 'renderLabel': 'Đồng Tháp', 'codes': [66]}



def laythongtin(province,tenfile):
    db=[]
    # Create a session object
    session = requests.Session()
    url = "https://dgbs.vpa.com.vn/search-api/search/list-announcement-plan"
    
    # Set the Content-Type header to application/json for all requests in the session
    session.headers.update({'Content-Type': 'application/json','User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'})
    offset = 1

    province = 14
    while True:
        
        data = {"offset":offset,"limit":25,"province":province,"vehicle":"","license_plate":""}
        print("------------------------------------------------------------")
    # print(data)
        # Send a POST request with JSON data using the session object
        response = session.post(url, data=json.dumps(data))
        print(response)
        if response.status_code == 200:
            data = response.json()
            print(data)
            if data['content'] !=  None:
                df =  pd.json_normalize(data['content'])
                db.append(df)    
            else:
                break        
            if  data['empty']:
                break
            
        else:
            break
        offset = offset + 25
        #time.sleep(1)
        
    dfall = pd.concat(db)
    dfall.reset_index()
    dfall.to_excel(tenfile)


danhsach =[
    {'matinh':14 ,'tentinh':'Son La'}  ,
    {'matinh':1 ,'tentinh':'Ha Noi'}
]

for i in danhsach:
    print ( "lay thong tin tinh: " + i['tentinh'] )
    province = i['matinh']
    tenfile = str(i['tentinh']).replace(" ", "_")  + '.xlsx'
    laythongtin(province,tenfile)
    
    