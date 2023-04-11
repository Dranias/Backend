const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const Stores = sequelize.define('stores', {
  idProducto: Sequelize.STRING,
  precioPublico: Sequelize.FLOAT,
  precioDistribuidor: Sequelize.FLOAT,
  costoProductos: Sequelize.FLOAT,
}, { 
  timestamps: false 
});

module.exports = Stores;