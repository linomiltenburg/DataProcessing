import csv

with open('KNMI_20141231.txt', 'r') as f:
    content = f.readlines()[12:]

with open("data.csv", "wb") as f:
    writer = csv.writer(f)

    for row in content:
        # extract date and change notation
        date = row.split(",")[1]
        year = date[:4]
        month = date[4:6]
        day = date[6:8]
        date = year + "/" + month + "/" + day
        # extract temperature
        temp = row.split(",")[2].strip()
        writer.writerow([date,temp])
