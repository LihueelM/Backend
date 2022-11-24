const express = require('express')
const {engine} = require('express-handlebars')
const {router} = require('./routers/router.js')
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')

const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//webSocket

const mensajes = []
const mensajesChat = []

io.on('connection' , socket => {
    //Carga de productos
    socket.emit('mensajesActualizados' , mensajes)

    socket.on('nuevoMensaje' , mensaje => {
        mensajes.push(mensaje)
        io.sockets.emit('mensajesActualizados' , mensajes)
    })

    //chat de pagina
    socket.emit('mensajesActualizadosChat' ,mensajesChat)

    socket.on('nuevoMensajeChat' , mensaje => {
        mensaje.fecha = new Date().toLocaleString()
        mensajesChat.push(mensaje)
        io.sockets.emit('mensajesActualizadosChat', mensajesChat)

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


