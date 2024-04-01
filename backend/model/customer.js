const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone_number: {
        type: String,
        unique: true,
        required: true
    },
    status:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Customer", userSchema);
