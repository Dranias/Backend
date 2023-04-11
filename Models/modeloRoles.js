const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const Roles = sequelize.define('roles', {
  idRoles: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  nameRole: Sequelize.STRING,
  descripcionRole: Sequelize.STRING
}, { 
  timestamps: false 
});

module.exports = Roles;