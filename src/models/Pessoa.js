const Sequelize = require('sequelize');
const sequelize = require('../db.js')

const schema = 'pessoa'

class Pessoa extends Sequelize.Model {}
Pessoa.init({
    nome: Sequelize.STRING,
    nascimento: Sequelize.STRING,
    cpf: Sequelize.STRING(11),
    email: Sequelize.STRING,
}, {sequelize, modelName: 'pessoa'})

sequelize.sync();
module.exports = Pessoa;