const express = require('express');
const {randomUUID} = require('crypto');

/* 
Metodos 
POST: Creacion
GET: Lectura
PUT: Actualizar
DELETE: Borrado

Interfaz de clase: Funcionalidades (metodos) que ofrece esa clase.
Interfaz del servidor: Puntos de acceso (endpoints) url's del servidos.

Cada vez que se realice una solicitud POST, se actualizara la base de datos, agregando x elemento/s. 
Si se desea leer la informacion se debera utilizar el motodo GET para no modificar la informacion.


*/

let cosas = []
let num = 0;

//Los controller serian los endpoint
const controllerGetRoot = (req, res) => {
    res.send('Inicio')
}

const controllerGetBienvenida = (req, res) => {
    res.send('Buenas tardes')
}

const controllerGetDespedida = (req, res) => {
    res.send('Adios')
}

//Creo el endpoint. En un array pusheo el numero previamente manipulado y luego envio el array al servidor.
const controllerPostCosas = (req, res) => {
    num++;
    cosas.push(num);
    res.json({ mensaje: `El numero cargado es: ${num}`})
}
//Hago una lectura de la informacion del servidor
const controllerGetCosas = (req, res) => {
    res.json({cosas})
}

const app = express();

//Aca se define el endpoint root
//Web server. Entregan paginas
app.get('/' , controllerGetRoot)
app.get('/bienvenida' , controllerGetBienvenida)
app.get('/despedida' , controllerGetDespedida)

//API REST. Entregan datos
//Endpoint con el metodo post
app.post('/api/cosas' , controllerPostCosas)
app.get('/api/cosas' , controllerGetCosas)




const server = app.listen(8080)