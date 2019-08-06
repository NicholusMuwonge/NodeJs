const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
var app = express();
mongoose.connect(
  "mongodb+srv://nicks:<straightup>@cluster0-h4ifj.mongodb.net/test?retryWrites=true&w=majority"
);

mongoose.connection.once("good", () => {
  console.log("the database is connected");
});

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(8000, function(res) {
  console.log("I am smart on 8000");
});
