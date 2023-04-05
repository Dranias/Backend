// app.js
const Productos = require('./Models/modeloProducto');
const Stores = require('./Models/modeloStores');
const Employees = require('./Models/modeloEmployees');
const EncabezadoVentas = require('./Models/modeloEncabezadoVentas');
const VentaDetalles = require('./Models/modeloventaDetalles');
const Movimientos = require('./Models/modeloMovimientos');
const Cancelaciones = require('./Models/modeloCancelaciones');

Productos.findAll().then(productos => {
  console.log(productos);
});

Stores.findAll().then(stores => {
  console.log(stores);
});

Employees.findAll().then(employees => {
  console.log(employees);
});

EncabezadoVentas.findAll().then(encabezadoVentas => {
  console.log(encabezadoVentas);
});

VentaDetalles.findAll().then(ventaDetalles => {
  console.log(ventaDetalles);
});

Movimientos.findAll().then(movimientos => {
  console.log(movimientos);
});

Cancelaciones.findAll().then(cancelaciones => {
  console.log(cancelaciones);
});