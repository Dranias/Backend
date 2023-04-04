const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const Almacen = sequelize.define('almacen', {
  idProducto: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  precioPublico: Sequelize.FLOAT,
  precioDistribuidor: Sequelize.FLOAT,
  costo: Sequelize.FLOAT,
  cantidadAlmacen: Sequelize.INTEGER,
  localUno: Sequelize.INTEGER,
  localDos: Sequelize.INTEGER
}, { 
  timestamps: false 
});

module.exports = Almacen;