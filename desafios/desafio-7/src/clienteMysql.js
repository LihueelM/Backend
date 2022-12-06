import createKnexClient from 'knex';
import { mysqlConfig } from './mySqlConfig.js';

export const clienteSql = createKnexClient(mysqlConfig);