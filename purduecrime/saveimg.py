from datetime import datetime
from os import path

def save(date, img):
    iso = datetime( int(date['date_year']),int(date['date_month']),int(date['date_day']) ).isoformat().split('T')[0]
    filename =  iso + ".jpg"
    file_path = path.relpath("static/prediction/" + filename)
    with open(file_path , "wb+") as destination:
        for chunk in img.chunks():
            destination.write(chunk)