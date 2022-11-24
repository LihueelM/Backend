const fs = require('fs')

class Contenedor {
    productos = []
    ruta;

    constructor(ruta) {
        this.productos = [];
        this.ruta = ruta;
    }

    save(item) {
        this.productos.push(item)
        fs.writeFileSync(this.ruta , JSON.stringify(this.productos))
    }

    getById(id) {
        const listaArchivo = this.productos = JSON.parse( fs.readFileSync(this.ruta , 'utf-8'))
        const item = listaArchivo.find(e => e.id === id)
        console.log(item);
        return item === undefined ? undefined : item;        
    }

    async putById(id, body) {
        this.productos = JSON.parse( await fs.promises.readFile(this.ruta , 'utf-8'))
        const indice = this.productos.findIndex(e => e.id === id)             
        this.productos.splice(indice , 1, body)
        await fs.promises.writeFile(this.ruta , JSON.stringify(this.productos))
        }

   getAll() {
        const listaArchivo = this.productos = JSON.parse(fs.readFileSync(this.ruta , 'utf-8'))
        console.log(listaArchivo);
        return listaArchivo;
    }

    deleteById(id) {
        this.productos = JSON.parse(fs.readFileSync(this.ruta , 'utf-8'))
        const posicion = this.productos.map(obj => obj.id).indexOf(id)
        this.productos.splice(posicion , 1)
        fs.writeFileSync(this.ruta , JSON.stringify(this.productos))       
    }
}

module.exports = {Contenedor}