class ContenedorArchivo {
    constructor(path){
        this.container = []        
    }

    save(product){
        this.container.push(product)
    }

    getById(id){
        let producto = this.container.find(e => e.id === id)
        return producto === undefined ? undefined : producto;
    }

    getAll(){
        return this.container.map(e => e , [])
    }

    deleteById(id){
        const idProducto = arrayTemporal.map(obj => obj.id).indexOf(id)
        this.container.splice(idProducto, 1)
        return this.container;
    }
}

module.exports = {ContenedorArchivo}