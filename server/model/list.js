const mongoose = require('mongoose')
const schema = new mongoose.Schema({
name:{type:String},
title:{type:String},
contents:{type:String},
fatherid:{type:String},
option:{type:Number}
})
module.exports=mongoose.model('list',schema)