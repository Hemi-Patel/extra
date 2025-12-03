const mongoose =require('mongoose');

const practiceSchma=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    profile:{
        type:String
    }
})
const model=mongoose.model('Pract',practiceSchma);
module.exports=model;