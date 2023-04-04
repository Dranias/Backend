const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const encabezadoVentas = sequelize.define('encabezadoVentas', {
  folio: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  fecha: Sequelize.DATE,
  importe: Sequelize.FLOAT,
  utilidad: Sequelize.FLOAT,
  local: Sequelize.STRING,
  empleado: Sequelize.INTEGER,
  numeroDistribuidor: Sequelize.STRING
}, { 
  timestamps: false 
});

module.exports = encabezadoVentas;
