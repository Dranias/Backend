const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const VentaDetalles = sequelize.define('ventaDetalles', {
  folioVenta: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  idProducto: Sequelize.STRING,
  cantidad: Sequelize.INTEGER,
  precio: Sequelize.FLOAT
}, { 
  timestamps: false 
});

module.exports = VentaDetalles;