const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize

const Productos = sequelize.define('productos', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  Marca: Sequelize.STRING,
  modelo: Sequelize.STRING,
  Tipo: Sequelize.STRING,
  identificador: Sequelize.STRING
}, { 
  timestamps: false 
});

module.exports = Productos;
