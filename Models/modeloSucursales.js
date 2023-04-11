const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const Sucursales = sequelize.define('sucursales', {
  idSucursales: Sequelize.INTEGER,
  nombreSucursal: Sequelize.STRING,
  direccionSucursal: Sequelize.STRING
}, { 
  timestamps: false 
});

module.exports = Sucursales;