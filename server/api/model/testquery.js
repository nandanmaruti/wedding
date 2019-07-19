const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    image:{
        type:String
    },
    email:{
        type:String
    }
    
},
);
module.exports = mongoose.model('User', user); 
 