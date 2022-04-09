const express = require('express');
const { route } = require('express/lib/application');

const PessoaController = require('./controller/Pessoa');

const routes = express.Router();

//Pessoa
routes.get('/pessoas', PessoaController.index)
routes.get('/pessoas/:id', PessoaController.getById)
routes.post('/pessoas', PessoaController.store)
routes.put('/pessoas/:id', PessoaController.update)
routes.delete('/pessoas/:id', PessoaController.delete)

module.exports = routes;