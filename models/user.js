const mongoose = require('mongoose');

//Schema

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required:true,
        unique: true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String,
    }

});

module.exports = mongoose.model('User',userSchema);