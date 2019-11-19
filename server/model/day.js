const mongoose = require('mongoose')
const schema =new  mongoose.Schema({
     title:{type:String},
     desc:{type:String},
     contents:{type:String}
})
module.exports=mongoose.model('daylist',schema)