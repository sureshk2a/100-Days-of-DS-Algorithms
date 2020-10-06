import pymongo

client = pymongo.MongoClient("localhost",8080)
myDb = client["mydatabase"]
print(client.database_names())
