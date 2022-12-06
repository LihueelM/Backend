const express = require('express');
const { app, controladorGetProductos, controladorDatosWeb, controladorPostProductosWeb, controladorGetProductoPorId, controladorPostProducto, controladorPutProductos, controladorEliminarProductos } = require("../controllers/controllers.js");

//Routers
const router = express.Router();

//Servidor web

router.get('/' , (req, res) => {
    res.render('index.handlebars')
})

router.post('/', controladorPostProductosWeb)
router.get('/productos' , controladorDatosWeb)

//apiRESTful

router.get('/api/productos', controladorGetProductos);
router.get('/api/productos/:id', controladorGetProductoPorId);
router.post('/api/productos', controladorPostProducto);
router.put('/api/productos/:id', controladorPutProductos);
router.delete('/api/productos/:id', controladorEliminarProductos);

exports.router = router
