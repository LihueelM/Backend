const { randomUUID } = require('crypto');
const { Contenedor } = require('../contenedor.js');

const nuevoContenedor = new Contenedor('./productos.txt');

function controladorGetProductos(req, res) {
    const productos = nuevoContenedor.productos.length;
    if (!productos) {
        res.json({ mensaje: `no hay productos` });
    }
    else {
        res.json(nuevoContenedor.getAll());
    }
}
function controladorGetProductoPorId({ params: { id } }, res) {
    const producto = nuevoContenedor.getById(id);
    if (!producto) {
        res.status(404);
        res.json({ mensaje: `No se encontro el producto con el id: ${id}` });
    } else {
        res.json(producto);
    }
}
function controladorEliminarProductos({ params: { id } }, res) {
    const producto = nuevoContenedor.getById(id);
    if (producto) {
        nuevoContenedor.deleteById(id);
        res.json({ mensaje: `Se elimino el producto con el id: ${id}` });
    }
    else {
        res.json({ mensaje: `No existe el producto con el id: ${id}` });
    }

}
function controladorPostProducto(req, res) {
    const producto = req.body;
    producto.id = randomUUID();
    nuevoContenedor.save(producto);
    res.status(201);
    res.json(producto);
}
function controladorPutProductos({ body, params: { id } }, res) {
    nuevoContenedor.putById(id, body);
    res.json(body);
}

//API
exports.controladorGetProductos = controladorGetProductos;
exports.controladorGetProductoPorId = controladorGetProductoPorId;
exports.controladorEliminarProductos = controladorEliminarProductos;
exports.controladorPostProducto = controladorPostProducto;
exports.controladorPutProductos = controladorPutProductos;



//WEB SERVER
function controladorPostProductosWeb (req, res){
    const producto = req.body;
    producto.id = randomUUID();
    nuevoContenedor.save(producto);
    res.status(201);
}

async function controladorDatosWeb ( req, res) {
    const listaProductos = nuevoContenedor.getAll()
    res.render('listaProductos' , {listaProductos , hayProductos: nuevoContenedor.productos.length > 0})
}

exports.controladorPostProductosWeb = controladorPostProductosWeb;
exports.controladorDatosWeb = controladorDatosWeb

