const express = require('express')
const { 
    controladorPostProductos,
    controladorGetProductos,
    controladorGetPorId,
    controladorPutPorId,
    controladorDeletePorId
 } = require("../controllers/controllers.js");

//Router
const routerApi = express.Router();

//Endpoint
routerApi.post('/productos' , controladorPostProductos)
routerApi.get('/productos' , controladorGetProductos)
routerApi.get('/productos/:id' , controladorGetPorId)
routerApi.put('/productos/:id' , controladorPutPorId)
routerApi.delete('/productos/:id' , controladorDeletePorId)

exports.routerApi = routerApi;