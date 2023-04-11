const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize
const Productos = require("./modeloProducto.js");

const Stores = sequelize.define('stores', {
  idProducto: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  precioPublico: Sequelize.FLOAT,
  precioDistribuidor: Sequelize.FLOAT,
  costoProductos: Sequelize.FLOAT,
}, { 
  timestamps: false 
});

Stores.hasMany(Productos, { foreignKey: 'idProducto', sourceKey: 'idProducto' });
Productos.belongsTo(Stores, { foreignKey: 'idProducto', sourceKey: 'idProducto' });
/*Productos.hasOne(Stores, { foreignKey: 'idProducto', sourceKey: 'idProducto' });
Stores.belongsTo(Productos, { foreignKey: 'idProducto', targetKey: 'idProducto' });
      ----    KUNG-FU-SION  ------  */

module.exports = Stores;