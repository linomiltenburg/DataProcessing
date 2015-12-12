import json

with open('Data_Extract_From_World_Development_Indicators_Data.csv', 'rb') as f:
    content = f.readlines()[1:215]

python_list = []

for row in content:
    # extract date and change notation
    splitted = row.split(",")
    country = splitted[4].strip()
    print country
    # data = splitted[-15:-1].strip()
    # python_list.append([country,data])

# print python_list
#
# # convert python_list to json_list
# json_list = json.dumps(python_list)
# print json_list
# # write json_list to file
# with open('data.json', 'w') as outfile:
#     json.dump(json_list, outfile)
