const express = require('express'); //Importando o express 

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')

const routes = express.Router(); //Desacoplando o módulo de rotas em uma variável

//Session / Login
routes.post('/sessions', SessionController.create); // é post, pois está criando uma sessão.

//List ongs
routes.get('/ongs', OngController.index) 
//Create ongs
routes.post('/ongs', OngController.create);

//Casos específicos
routes.get('/profile', ProfileController.index);

//List incidents
routes.get('/incidents', IncidentController.index)
//Create incidents
routes.post('/incidents', IncidentController.create);
//Delete incidents
routes.delete('/incidents/:id', IncidentController.delete);




module.exports = routes; //Exportando a rota (routes), e poderá ser imprtada em outro script

/**
 * Rota raíz
 * Rota/Recurso
 * Métodos HTTP
 * Método GET: Buscar / listar uma informação do back-end.
 * Método POST: Criar uma informação no back-end.
 * Método PUT: Alterar uma informação no back-end.
 * Método DELETE: Deletar uma informação no back-end
 * 
 * Tipos de parâmetros
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação);
 * Route Params: Parâmetros utilizados para identificar recursos;
 * Corpo da requisição, utilizado para criar ou alterar recursos. 
 * --> Query Params  const params = request.query; 
   --> Route Params  const params = request.params;  
 */
 