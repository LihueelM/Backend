const express = require('express')
const fs = require('fs')
const {ContenedorArchivo} = require('./productos')

const server = express();

async function main(){

    const rutaArchivo = './productos.txt'
    await fs.promises.writeFile(rutaArchivo, [])
    const contenedor = new ContenedorArchivo(rutaArchivo)

    await contenedor.save({
        title: "Escuadra",
        price: 123.45,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        id: 1
      })
      await contenedor.save({
        title: "Calculadora",
        price: 234.56,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        id: 2
      })
      await contenedor.save({
        title: "Globo Terráqueo",
        price: 345.67,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
        id: 3
      })      

    server.get('/productos' , async (peticion, respuesta) => {
        respuesta.send(JSON.stringify(await contenedor.getAll()))
    })
    
    server.get('/productosRandom' , async (peticion, respuesta) => {
        respuesta.send(JSON.stringify( await contenedor.getElementById(Math.ceil(Math.random() * 3))))
    })
}

function conectar (puerto = 0) {
    return new Promise((resolve, reject) => {
        const connectedServer = server.listen(puerto , err => {
          if(err)  reject(err)
          else resolve(connectedServer)
        })
    })
}

module.exports = {conectar}
main()
