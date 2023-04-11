const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const encabezadoVentas = sequelize.define('encabezadoVentas', {
  idFolioVenta: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  fechaEncabezado: Sequelize.DATE,
  importeEncabezado: Sequelize.FLOAT,
  utilidadEncabezado: Sequelize.FLOAT,
  idSucursales: Sequelize.STRING,
  idEmpleado: Sequelize.INTEGER,
  numeroDistribuidor: Sequelize.STRING
}, { 
  timestamps: false 
});

module.exports = encabezadoVentas;
