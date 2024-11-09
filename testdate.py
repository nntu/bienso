import pytz
from datetime import datetime

# Target time in UTC
target_time_str = "2024-11-18T09:30:00Z"
target_time = datetime.strptime(target_time_str, "%Y-%m-%dT%H:%M:%SZ")
target_time = pytz.UTC.localize(target_time)

# Current time in UTC
current_time = datetime.now(pytz.UTC)

# Convert both times to GMT+7 (Bangkok timezone)
bangkok_tz = pytz.timezone('Asia/Bangkok')
target_time_bkk = target_time.astimezone(bangkok_tz)
current_time_bkk = current_time.astimezone(bangkok_tz)

# Calculate the remaining time
remaining_time = target_time_bkk - current_time_bkk

# Extract days, hours, and minutes
days = remaining_time.days
hours = remaining_time.seconds // 3600
minutes = (remaining_time.seconds % 3600) // 60

# Format in Vietnamese
remaining_time_vn = f"{days} ngày {hours} giờ {minutes} phút"

print(f"Current time (GMT+7): {current_time_bkk.strftime('%Y-%m-%d %H:%M:%S %Z')}")
print(f"Target time (GMT+7): {target_time_bkk.strftime('%Y-%m-%d %H:%M:%S %Z')}")
print(f"Thời gian còn lại: {remaining_time_vn}")