module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const menu = require('../../model/menu')
    const list = require('../../model/list')
    //创建菜单
    router.post('/pushmenu', async (req, res) => {
        let { name, pushname, listname, index } = req.body
        const model = menu.create({
            name: name,
            pushname: pushname,
            listname: listname,
            index: index
        })
        res.send(model)
    })
    //菜单列表
    router.get('/listmenu', async (req, res) => {
        const model = await menu.find()
        res.send(model)
    })
    //删除指定id
    router.delete('/del/:id', async (req, res) => {
        const model = await menu.findByIdAndDelete(req.params.id)
        res.send(model)
    })
    //查询修改指定id
    router.get('/listmenu/:id', async (req, res) => {
        const model = await menu.findById(req.params.id)
        res.send(model)
    })
    //修改
    router.put('/pushmenu/:id', async (req, res) => {
        let { name, pushname, listname, index } = req.body
        const model = await menu.findByIdAndUpdate(req.params.id, {
            name: name,
            pushname: pushname,
            listname: listname,
            index: index
        })
        res.send(model)
    })
    //创建内容
    router.post('/pushlist', async (req, res) => {
        let { name, title, contents, fatherid } = req.body
        const model =await list.create({
            name, title, contents, fatherid,option:0
        })
        res.send(model)
    })
    //查看内容
    router.get('/seelist/:id', async (req, res) => {
        const model = await list.find(
         {fatherid:req.params.id}
        )
        res.send(model)
    })
    //删除内容
    router.delete('/seedel/:id', async (req, res) => {
        const model = await list.findByIdAndDelete(req.params.id)
        res.send(model)
    })
   //修改
    router.put('/seechange/:id', async (req, res) => {
        let { name, title, contents, fatherid,option } = req.body
        const model = await list.findByIdAndUpdate(req.params.id, {
            name, title, contents, fatherid,option
        })
        res.send(model)
    })
    //查指定
    router.get('/onelist/:id', async (req, res) => {
        const model = await list.findById(req.params.id)
        res.send(model)
    })
    
    app.use('/admin', router)
}