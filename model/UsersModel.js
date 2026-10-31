const mongoose  = require("mongoose");
const bcrypt = require("bcryptjs");

const {UserSchema} = require("../schema/UsersSchema.js");

const UserModel =  mongoose.model ("User" , UserSchema);

module.exports = {UserModel};

