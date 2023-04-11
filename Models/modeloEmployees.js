const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const Employees = sequelize.define('employees', {
  idEmpleado: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  idRoles: Sequelize.INTEGER,
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING,
  user: Sequelize.STRING
}, { 
  timestamps: false 
});

module.exports = Employees;
