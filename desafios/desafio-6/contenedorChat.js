const fs = require('fs')

class containerMensajes{
    container
    ruta
    constructor(ruta){
        this.container = []
        this.ruta = ruta
    }

    async save(producto){
        this.container.push(producto)
        await fs.promises.writeFile(this.ruta , JSON.stringify(this.container))
    }

    async getAll(){
        try{
            this.container = JSON.parse( await fs.promises.readFile(this.ruta , 'utf-8'))
            return this.container.map(e => e,[])
        }
        catch(error){
            throw error
        }
    }
}

module.exports={containerMensajes}