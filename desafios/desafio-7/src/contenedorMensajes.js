import { ContenedorMysql } from "./contenedorMysql.js";
import { clienteSql } from "./clienteMysql.js";

export const contenedorMensajes = new ContenedorMysql(clienteSql, 'mensajes');