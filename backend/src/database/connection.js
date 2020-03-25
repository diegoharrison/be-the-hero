const knex = require('knex');
const configuration = require('../../knexfile');

//Configuração de desenvolvimento.
const connection = knex(configuration.development)

//exportando a connection para outros arquivos para comunicação.
module.exports = connection;
