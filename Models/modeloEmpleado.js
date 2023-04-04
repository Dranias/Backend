const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const Empleado = sequelize.define('empleado', {
  idEmpleado: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  user: Sequelize.STRING,
  password: Sequelize.STRING,
  level: Sequelize.STRING,
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING
}, { 
  timestamps: false 
});

module.exports = Empleado;
