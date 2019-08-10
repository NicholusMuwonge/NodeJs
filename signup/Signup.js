var mongoose = require('mongoose');
var schema = mongoose.Schema;
const Joi = require('joi');

// create the type of data to be insterted into the DB
var userSignUpSchema = new schema({
    username: {type: String, required: true, index:{unique: true}, minlength: 5, maxlength:20},
    firstname: {type: String, minlength: 5, maxlength:20},
    lastname: {type: String, minlength: 5, maxlength:20},
    email: {type: String, unique: true, trim: true},
    created_on: {type: Date, default: Date.now},
    updated_on: {type: Date, default: Date.now},
    approved: Boolean,
    active: Boolean,
    password: {type: String, required: true, minlength: 5, maxlength:20}
})

function validateUser(user){
    const schema ={
        username: Joi.string().min(5).max(20).required(),
        email: Joi.string().min(5).max(20).required().email(),
        password: Joi.string().min(5).max(20).required()
    };
    return Joi.validate(user, schema);
}

var User = mongoose.model('User', userSignUpSchema);
module.exports = User;
module.validate = validateUser;
