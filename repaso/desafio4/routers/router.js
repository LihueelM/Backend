const express = require('express');
const { app, controladorGetProductos, controladorGetProductoPorId, controladorPostProducto, controladorPutProductos, controladorEliminarProductos } = require("../controllers/controllers.js");

//Routers
const router = express.Router();

router.get('/productos', controladorGetProductos);
router.get('/productos/:id', controladorGetProductoPorId);
router.post('/productos', controladorPostProducto);
router.put('/productos/:id', controladorPutProductos);
router.delete('/productos/:id', controladorEliminarProductos);

exports.router = router
