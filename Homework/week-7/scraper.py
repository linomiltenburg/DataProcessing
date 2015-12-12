import json

with open('Data_Extract_From_World_Development_Indicators_Data.csv', 'rb') as f:
    content = f.readlines()[1:215]

dictionary = {}
for row in content:
    # extract date and change notation
    data = []
    splitted = row.split(",")
    country = splitted[-26].strip()

    data_1991 = splitted[-25].strip()
    data_1992 = splitted[-24].strip()
    data_1993 = splitted[-23].strip()
    data_1994 = splitted[-22].strip()
    data_1995 = splitted[-21].strip()
    data_1996 = splitted[-20].strip()
    data_1997 = splitted[-19].strip()
    data_1998 = splitted[-18].strip()
    data_1999 = splitted[-17].strip()
    data_2000 = splitted[-16].strip()
    data_2001 = splitted[-15].strip()
    data_2002 = splitted[-14].strip()
    data_2003 = splitted[-13].strip()
    data_2004 = splitted[-12].strip()
    data_2005 = splitted[-11].strip()
    data_2006 = splitted[-10].strip()
    data_2007 = splitted[-9].strip()
    data_2008 = splitted[-8].strip()
    data_2009 = splitted[-7].strip()
    data_2010 = splitted[-6].strip()
    data_2011 = splitted[-5].strip()
    data_2012 = splitted[-4].strip()
    data_2013 = splitted[-3].strip()
    data_2014 = splitted[-2].strip()

    data.append(data_1991)
    data.append(data_1992)
    data.append(data_1993)
    data.append(data_1994)
    data.append(data_1995)
    data.append(data_1996)
    data.append(data_1997)
    data.append(data_1998)
    data.append(data_1999)
    data.append(data_2000)
    data.append(data_2001)
    data.append(data_2002)
    data.append(data_2003)
    data.append(data_2004)
    data.append(data_2005)
    data.append(data_2006)
    data.append(data_2007)
    data.append(data_2008)
    data.append(data_2009)
    data.append(data_2010)
    data.append(data_2011)
    data.append(data_2012)
    data.append(data_2013)
    data.append(data_2014)

    dictionary[country] = data


# convert python_list to json_list
json_list = json.dumps(dictionary)
print json_list
# write json_list to file
with open('data1.json', 'w') as outfile:
    json.dump(json_list, outfile)
