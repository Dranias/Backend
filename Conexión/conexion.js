const Sequelize = require('sequelize');

const sequelize = new Sequelize('xcell', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;