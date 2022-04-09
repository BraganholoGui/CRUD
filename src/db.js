const Sequelize = require('sequelize')
const sequelize = new Sequelize('nomeBanco', 'UsuarioBanco', 'senha', {
    host: 'host',
    dialect: 'dialect'
});

module.exports = sequelize;