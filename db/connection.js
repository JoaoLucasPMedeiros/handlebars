const Sequelize = require('sequelize');


const connection = new Sequelize('ponto', 'joaoone','123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;