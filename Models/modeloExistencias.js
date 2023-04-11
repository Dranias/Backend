const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const Existencias = sequelize.define('existencias', 
{
  idExistencias: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idProducto: Sequelize.STRING,
  isSucursales: Sequelize.INTEGER,
  existenciaProductos: Sequelize.INTEGER
}, { 
  timestamps: false 
});

module.exports = Existencias;