/**
 * Importando o pacote express. 
 */
const express = require('express')

/**
 * Cors - permitir acesso de aplicações.
 */
const cors = require('cors');


/**
 * Importanda a rota (routes do arquivo route.js).
 */
const routes = require('./routes')


/**
 * Variável para armazernar a aplicação
 */
const app = express();


/**
 * Usar json no corpo (body) das requisições.
 */
app.use(express.json());


/**
 * Usando routes
 */
app.use(routes);


/**
 * porta de comunicação do backend
 */
app.listen(3333);










