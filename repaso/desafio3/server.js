const express = require('express')
const {Contenedor} = require('../desafio4/contenedor.js')
const app = express()

const listaProductos = new Contenedor('./productos.txt')
async function CargarProductos(){
    listaProductos.save({
        id: 1,
        title: 'objeto1',
        price: 300,
        thumbnail: 'url1'
    })
    listaProductos.save({
        id: 2,
        title: 'objeto2',
        price: 300,
        thumbnail: 'url2'
    })
    listaProductos.save({
        id: 3,
        title: 'objeto3',
        price: 300,
        thumbnail: 'url3'
    }) 
}

app.get('/productos' , async (req, res) => {
    res.send(JSON.stringify(await listaProductos.getAll()))
})

app.get('/productosRandom' , async (req, res) => {
    res.send(JSON.stringify(await listaProductos.getById(Math.ceil(Math.random() * 3))))
})

const server = app.listen(8080 , () => {
    console.log(`Conectado al servidor: ${server.address().port}`);
})
server.on("error" , error => console.log(`Error en el servidor ${error}`))