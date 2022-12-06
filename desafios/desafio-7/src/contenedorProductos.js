import { ContenedorMysql } from "./contenedorMysql.js";
import { clienteSql } from "./clienteMysql.js";

export const contenedorProductos = new ContenedorMysql(clienteSql, 'productos');