const Sequelize = require('sequelize');
const sequelize = require('../Conexión/conexion.js'); // importa la instancia de sequelize
const Stores = require('./modeloStores');

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


Productos.hasOne(Stores, { foreignKey: 'idProducto' });
Stores.belongsTo(Productos, { foreignKey: 'idProducto' });

module.exports = Productos;
