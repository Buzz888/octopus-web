module.exports=app=>{
    const express = require('express')
    const router = express.Router({
        mergeParams:true //让地址可以查找到动态匹配参数
    })
    
    //查全部
    router.get('/',async(req,res)=>{
       
        const model =  await req.model.find()
        res.send(model)
    })
    //增加
    router.post('/push',async(req,res)=>{
        const {title,desc,contents}=req.body
        const model = await req.model.create({
            title,desc,contents
        })
        res.send(model)
    })
    //修改
    router.put('/push/:id',async(req,res)=>{
        const id = req.params.id
        const {title,desc,contents}=req.body
        const model = await req.model.findByIdAndUpdate(id,({
            title,desc,contents
        }))
        res.send(model)
    })
    //指定id
    router.get('/:id', async (req, res) => {
        const model = await req.model.findById(req.params.id)
        res.send(model)
    })
    //删除
    router.delete('/del/:id',async(req,res)=>{
        const id = req.params.id
        const model = await req.model.findByIdAndDelete(id)
        res.send(model)
    })
    app.use('/admin/:resource',(req,res,next)=>{
        const Model = require(`../../model/${req.params.resource}`)
        req.model = Model
        next()
    }, router)
}