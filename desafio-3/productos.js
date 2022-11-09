const fs = require('fs')

class ContenedorArchivo {
    productos
    ruta
    constructor(ruta){
        this.ruta = ruta
        this.productos = []
    }

    async save(objeto){
        this.productos.push(objeto)
        await fs.promises.writeFile(this.ruta , JSON.stringify(this.productos))
    }

    async getElementById(id){
        const arrayTemporal = this.productos = JSON.parse(await fs.promises.readFile(this.ruta , 'utf-8'))
        const idItem = arrayTemporal.find((e) => e.id === id)
        return idItem;
    }

    async deleteById(id){
        const arrayTemporal = this.productos = JSON.parse( await fs.promises.readFile(this.ruta , 'utf-8'))
        const idItem = await arrayTemporal.map(obj => obj.id).indexOf(id)
        this.productos.splice(idItem, 1)
        return this.productos;
    }

    async getAll(){
        this.productos = JSON.parse(await fs.promises.readFile(this.ruta, 'utf-8'))
        return this.productos;
    }   

    async deleteAll(){
        this.productos = JSON.parse( await fs.promises.readFile(this.ruta , 'utf-8'))
        this.productos.splice(0)
        return this.productos
    }        
}

module.exports = {ContenedorArchivo}


/* async function test(){
    const rutaArchivo = './productos.txt'
    await fs.promises.writeFile(rutaArchivo, '[]')
    const contenedor = new ContenedorArchivo(rutaArchivo)

    await contenedor.save({
        id: 0,
        title: 'manzanas',
        price: 399,
        thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqbHxFFGCfaCulWmnYRb5Erb9lJk2wBssHM2WHCU1Gt5kY95J2EsSIzYXsv0v5saTKQ0UbL2-GIMISKxfdViGZ7CV39e8Zrl38szvkFkcPGb357hEa8ANVome7piaU-Fe0Ug&usqp=CAc'
    })
    await contenedor.save({
        id: 1,
        title: 'peras',
        price: 800,
        thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqbHxFFGCfaCulWmnYRb5Erb9lJk2wBssHM2WHCU1Gt5kY95J2EsSIzYXsv0v5saTKQ0UbL2-GIMISKxfdViGZ7CV39e8Zrl38szvkFkcPGb357hEa8ANVome7piaU-Fe0Ug&usqp=CAc'
    })
    await contenedor.save({
        id: 2,
        title: 'naranja',
        price: 50,
        thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqbHxFFGCfaCulWmnYRb5Erb9lJk2wBssHM2WHCU1Gt5kY95J2EsSIzYXsv0v5saTKQ0UbL2-GIMISKxfdViGZ7CV39e8Zrl38szvkFkcPGb357hEa8ANVome7piaU-Fe0Ug&usqp=CAc'    
    })  

    await contenedor.getAll() 

    function NumeroAlAzar(max){
        return Math.floor(Math.random() * max)
    }
    console.log(await contenedor.getElementById(NumeroAlAzar(3)) )
    
}
test()  */

