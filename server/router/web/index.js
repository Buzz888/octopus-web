module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const menu = require('../../model/menu')
    const list = require('../../model/list')
    const css = require('../../model/css')
    const day = require('../../model/day')
    const alorithm = require('../../model/alorithm')
    router.get('/menulist', async (req, res) => {
        const model = await menu.find()
        let data = [];
       
        model.map(i => data.push({ title: i.name, _id: i._id }))
       function ary(data){
           data.forEach(async (item, index) => {
            const model = await list.find({
                fatherid: item._id
            })
            data[index].item = []
            model.map(i => data[index].item.push({name:i.title,router:i._id}))
            data1 =data
        })
        
        return data1
       }
       let b = ary(data)
        
          res.send(b)}) 
    router.get('/list/:id',async(req,res)=>{
       
        const model = await list.findById(req.params.id)
        res.send(model)
    })
    router.get('/css',async(req,res)=>{
       
        const model =  await css.find()
        res.send(model)
    })
    router.get('/day',async(req,res)=>{
       
        const model =  await day.find()
        res.send(model)
    })
    router.get('/day/:id',async(req,res)=>{
       
        const model =  await day.findById(req.params.id)
        res.send(model)
    })
    router.get('/call',async(req,res)=>{
       
        const model =  await alorithm.find()
        res.send(model)
    })
    app.use('/web', router)
}