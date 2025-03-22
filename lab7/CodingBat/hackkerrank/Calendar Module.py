from datetime import date
import calendar

info = input().split(" ")
my_date = date(int(info[2]),int(info[0]),int(info[1]))
print((calendar.day_name[my_date.weekday()]).upper())

