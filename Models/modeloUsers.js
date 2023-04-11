const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const Users = sequelize.define('users', {
  idUser: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  password: Sequelize.STRING
}, { 
  timestamps: false 
});

module.exports = Users;