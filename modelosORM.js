// app.js
const sequelize = require('./Conexión/conexion'); // importa la instancia de sequelize
const Productos = require('./Models/modeloProducto'); // importa el modelo de productos
const Almacen = require('./Models/modeloAlmacen'); // importa el modelo almacen
const Empleado = require('./Models/modeloEmpleado'); // importa el modelo almacen


Productos.findAll().then(productos => {
  console.log(productos);
});

Almacen.findAll().then(almacen => {
  console.log(almacen);
});

/*Empleado.findAll().then(empleado => {
  console.log(empleado);
});*/