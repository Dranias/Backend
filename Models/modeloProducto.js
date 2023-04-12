const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion'); // importa la instancia de sequelize
const Existencias = require("./modeloExistencias");

const Productos = sequelize.define('productos', {
  idProducto: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  marca: Sequelize.STRING,
  modelo: Sequelize.STRING,
  tipo: Sequelize.STRING,
  identificador: Sequelize.STRING,
  descripcionProducto: Sequelize.STRING
}, { 
  timestamps: false 
});

Productos.hasMany(Existencias, { foreignKey: 'idProducto' });
Existencias.belongsTo(Productos, { foreignKey: 'idProducto' });

module.exports = Productos;
