const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
    ,country:{
         type:String,
        required:true,
    },
    password:{
         type:String,
        required:true,
    },
    role:{
         type:String,
        required:true,
    }
},
{
    timestamps:true,
})
const users = new mongoose.model("Users",usersSchema);
module.exports = users;
