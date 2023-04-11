const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const Cancelaciones = sequelize.define('cancelaciones', {
  idFolioVenta: Sequelize.INTEGER,
  idProducto: Sequelize.STRING,
  cantidad: Sequelize.INTEGER
}, { 
  timestamps: false 
});

module.exports = Cancelaciones;