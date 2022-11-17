const express = require('express')
const webRouter = express.Router()

const productos = []

webRouter.get('/productos' , async ( req, res) => {
    res.render('productos' , { productos, hayProductos: productos.length > 0 })
})

webRouter.get('/' , (req, res) => {
    res.render('index.handlebars')
})

webRouter.post('/' , (req, res) => {
    productos.push(req.body)
    console.log(productos);
})


module.exports = {webRouter}