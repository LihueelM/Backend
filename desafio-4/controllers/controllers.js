const {randomUUID} = require('crypto')
const {ContenedorArchivo} = require('../contenedor')

const contenedor = new ContenedorArchivo('./productos.txt')

const controladorGetProductos = ({ query }, res) =>{
    res.json(contenedor);
}

const controladorPostProductos = (req , res) => {
    const newProduct = req.body;
    newProduct.id = randomUUID();
    contenedor.save(newProduct);
    res.status(201)
    res.json(newProduct)   
}

const controladorGetPorId = ({params: {id}} , res) => {
    const resultado = contenedor.getById(id)
    if(!resultado){
        res.status(404)
        res.json({message : `No se encontro el elemento con el id: (${id})`})
    }else{
        res.json(resultado);
    }
}

const controladorPutPorId = ({body, params: {id}} , res) => {
    const resultado = contenedor.container.findIndex(e => e.id === id)
    if(resultado === -1){
        res.status(404)
        res.json({message : `No se encontro el elemento con el id: (${id})`})
    }else{
        contenedor.container[resultado] = body
        res.json(body);
    }
}

const controladorDeletePorId = ({params: {id}}, res) => {
    const resultado = contenedor.container.findIndex(e => e.id === id);
    if(resultado === -1){
       res.status(404);
       res.json({message: `No se encontro el elemento con el id: ${id}`})
    }else{
       contenedor.container.splice(resultado, 1);
       res.send();
    }
 }

exports.controladorPutPorId = controladorPutPorId;
exports.controladorPostProductos = controladorPostProductos;
exports.controladorDeletePorId = controladorDeletePorId;
exports.controladorGetPorId = controladorGetPorId;
exports.controladorGetProductos = controladorGetProductos;