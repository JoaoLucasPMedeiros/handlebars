const db = require('../db/connection');
const Sequelize = require('sequelize');

const cadPonto = db.define('cadPonto', {
    nome: {
        type: Sequelize.STRING,
    },
    cpf: {
        type: Sequelize.DOUBLE,
    },
    funcao: {
        type: Sequelize.STRING,
    },


});

/* cadPonto.sync({force: true}); */