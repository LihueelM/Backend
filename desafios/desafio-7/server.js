import express from "express";
import {routerProductos} from './router/routerProductos.js'
import {routerMensajes} from './router/routerMensajes.js'


export const app = express()

app.use(express.json());

app.use('/api/productos', routerProductos)
app.use('/api/mensajes', routerMensajes)