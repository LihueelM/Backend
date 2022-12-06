const express = require('express')
const {engine} = require('express-handlebars')
const {router} = require('./routers/router.js')
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')
const {containerMensajes} = require('./contenedorChat.js')

const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//webSocket

const mensajes = []
const mensajesChat = new containerMensajes('./chat.txt')

io.on('connection' , socket => {
    //Carga de productos
    socket.emit('mensajesActualizados' , mensajes)

    socket.on('nuevoMensaje' , mensaje => {
        mensajes.push(mensaje)
        io.sockets.emit('mensajesActualizados' , mensajes)
    })    
})

io.on('connection' , async socket => {

    const mensajes =  await mensajesChat.getAll()
    //chat de pagina
    socket.emit('mensajesActualizadosChat' ,mensajes)

    socket.on('nuevoMensajeChat' , async mensaje => {
        mensaje.fecha = new Date().toLocaleString()
        await mensajesChat.save(mensaje)
        const mensajes = await mensajesChat.getAll()
        io.sockets.emit('mensajesActualizadosChat', mensajes)

    })
})

//handlebars template
app.engine('handlebars' ,engine())
app.set('view engine' , 'handlebars')


app.use(router);


let PORT = 8080;
const server = httpServer.listen(PORT , () => {
    console.log(`Conectado al puerto ${server.address().port}`);
})

exports.app = app


