import json

with open('KNMI_20141231.txt', 'r') as f:
    content = f.readlines()[12:]

python_list = []
json_list = []

for row in content:
    # extract date and change notation
    date = row.split(",")[1]
    year = date[:4]
    month = date[4:6]
    day = date[6:8]
    date = year + "/" + month + "/" + day
    # extract temperature
    temp = row.split(",")[2].strip()
    python_list.append([date,temp])

# convert python_list to json_list
json_list = json.dumps(python_list)
print json_list
# write json_list to file
with open('data.txt', 'w') as outfile:
    json.dump(json_list, outfile)
