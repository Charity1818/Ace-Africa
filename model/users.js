const mongoose = require("mongoose") 
const Schema   = mongoose.Schema 

let userSchema   =  new Schema({
    name: {
        type: String, 
        required : true  
    },
    email: {
        type: String,
        required : true
    },
    phone: {
        type: Number,
        required : true
    }, 
    message: {
        type: String,
        required : true
    },
    dateCreated : {
        type : Date,
        default : Date.now()
    }
}) 


module.exports = mongoose.model("users" , userSchema)