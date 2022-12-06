import { Router } from "express";
import { contenedorMensajes } from "../src/contenedorMensajes.js";
import {randomUUID as crearId} from 'crypto'


export const routerMensajes = Router();

routerMensajes.post('/' , async (req, res) => {
    const nuevoMensaje = req.body
    nuevoMensaje.id = crearId();
    await contenedorMensajes.guardar(nuevoMensaje);
    res.json(nuevoMensaje);
});

routerMensajes.get('/', async (req, res) => {
    res.json(await contenedorMensajes.leerTodos())
})