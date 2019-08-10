var User = require("../signup/Signup");
var validate = require("../signup/Signup");
var express = require("express");
var router = express.Router();
var bodyParse = require('body-parser');

var jsonParser = bodyParse.json()

router.post('/', jsonParser, async (req, res) => {
//   const error  = validate(req.body);
  let user = await User.findOne({
    email: req.body.email,
    username: req.body.username
  });

  if (!req.body) {
    res.status(400).send(error.detail[0].message);
  }
  if(user){
    res.status(400).send('user exists');
  }
   else {
    user = new User({
      email: req.body.email,
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password
    });
    await user.save();
    res.send(user);
  }
});

module.exports = router;
