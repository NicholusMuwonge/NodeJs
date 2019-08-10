const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
var app = express();
const port = process.env.PORT || 8000;
const Joi = require("joi");
var users = require("./signup/SignupRoute");
var url = 'mongodb://localhost/node_db';
const online_url = 'mongodb+srv://nicks:<straightup>@cluster0-h4ifj.mongodb.net/test?retryWrites=true&w=majority';


mongoose
  .connect(url)
  .then(() =>
    console.log("you are connected"))
    .catch(err => {
      console.log("this is a failure to connect", err);
    })

mongoose.connection.once("good", () => {
  console.log("the database is connected");
});

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.use(express.json());
app.use("/api/register/", users);
app.listen(port, function(res) {
  console.log(`I am smart on ${port}`);
});
