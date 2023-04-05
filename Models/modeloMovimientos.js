const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const Movimientos = sequelize.define('movimientos', {
  idProducto: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  tipoMovimiento: Sequelize.STRING,
  descripcionMovimiento: Sequelize.STRING,
  fechaMovimiento: Sequelize.DATE
}, { 
  timestamps: false 
});

module.exports = Movimientos;