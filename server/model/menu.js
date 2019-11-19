const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: {type:String},
    pushname: {type:String},
    listname: {type:String},
    index: {type:String},
    
})
module.exports=mongoose.model('menu',schema)