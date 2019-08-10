var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url = "mongodb://localhost/node_db";

mongoose.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
