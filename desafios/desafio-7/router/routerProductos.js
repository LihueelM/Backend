import { Router } from "express";
import { contenedorProductos } from "../src/contenedorProductos.js";
import {randomUUID as crearId} from 'crypto'


export const routerProductos = Router();

routerProductos.post('/' , async (req, res) => {
    const nuevoProducto = req.body
    nuevoProducto.id = crearId();
    await contenedorProductos.guardar(nuevoProducto);
    res.json(nuevoProducto);
});

routerProductos.get('/', async (req, res) => {
    res.json(await contenedorProductos.leerTodos())
})