const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema ({
    email: {
        type : String,
        required : true,
        unique : true,
    },
    username: {
        type : String,
        required : true,
    },
    password : {
        type : String , 
        required : true ,
    },
    createdAt: {
        type: Date, // Yithe String aivji Date theva
        default: Date.now,
    }
});


UserSchema.pre("save", function () {
    const salt = bcrypt.genSaltSync(12);
    this.password = bcrypt.hashSync(this.password, salt);
});

module.exports = {UserSchema};
