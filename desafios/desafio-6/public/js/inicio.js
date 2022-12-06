const socket = io()

//carga de productos

async function mostrarMensajes(mensajes){
    const mensajesParaMostrar = mensajes.map(({nombre, precio, imagen}) => {
        return `<li>${nombre}: - $${precio} - <img src="${imagen}" alt="img-default" width='60px'>  </li>`
    })
    const mensajesHtml = 
    `
    <ul> 
        ${mensajesParaMostrar.join('\n')}
    </ul>
    `
    const listaMensajes = document.getElementById('listaMensajes')
    listaMensajes.innerHTML = mensajesHtml
}

socket.on('mensajesActualizados' , mensajes => {
    mostrarMensajes(mensajes)
})

const botonEnviar = document.getElementById('botonEnviar') 
botonEnviar.addEventListener('submit' , e => {
    const inputNombre = document.getElementById('nombre')
    const inputPrecio = document.getElementById('precio')
    const inputThumbnails = document.getElementById('imagen')

    if(inputNombre && inputPrecio) {
        const mensaje = {
            nombre: inputNombre.value,
            precio: inputPrecio.value,
            imagen: inputThumbnails.value
        }
        socket.emit('nuevoMensaje' , mensaje)
    }else{
        alert('ingrese algun mensaje')
    }
})

//Chat de la pagina

async function mostrarMensajesChat(mensajes){
    const mensajesParaMostrarChat = mensajes.map(({fecha, autor ,texto}) => {
        return `<li>${fecha} - ${autor}: - ${texto} </li>`
    })
    const mensajesHtml = 
    `
    <ul> 
        ${mensajesParaMostrarChat.join('\n')}
    </ul>
    `
    const listaMensajesChat = document.getElementById('listaMensajesChat')
    listaMensajesChat.innerHTML = mensajesHtml
}

socket.on('mensajesActualizadosChat' , mensajesChat => {
    mostrarMensajesChat(mensajesChat)
})

const botonEnviarMensaje = document.getElementById('botonEnviarMensaje') 
botonEnviarMensaje.addEventListener('click' , e => {
    e.preventDefault()
    const inputAutor = document.getElementById('autor')
    const inputTexto = document.getElementById('texto')    
    if(inputAutor && inputTexto) {
        const mensaje = {
            nombre: inputAutor.value,
            precio: inputTexto.value
        }
        socket.emit('nuevoMensajeChat' , mensaje)
    }else{
        alert('ingrese algun mensaje')
    }
})