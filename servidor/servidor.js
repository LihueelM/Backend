const http = require('http')

const server = http.createServer((peticion, respuesta) => {
    respuesta.end('Hola mundo')
})


function conectar (puerto = 0) {
    return new Promise((resolve, reject) => {
        const connectedServer = server.listen(puerto , err => {
          if(err)  reject(err)
          else resolve(connectedServer)
        })
    })
}

module.exports = {conectar}
