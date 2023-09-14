const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    const myobj = { name: "Nitish", MobNo: "34567895678" }
    dbo.collection("Customers").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("Document Inserted Successfully");
        db.close();
    })
})