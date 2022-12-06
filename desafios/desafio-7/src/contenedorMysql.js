export class ContenedorMysql{
    constructor(clienteMysql, tabla){
        this.cliente = clienteMysql;
        this.tabla = tabla;
    }

    async guardar(elemento){
        await this.cliente(this.tabla).insert(elemento);
    }

    async leerTodos() {
        return await this.cliente(this.tabla).select();
    }
    
}