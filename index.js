const express = require('express');
const app = express();
const controllerProductos = require('./Controllers/controllerProductos');

//Agregar producto
  app.use(express.json());
  app.use('/', controllerProductos);

  app.listen(3000, () => {
    console.log('Server listening on port 3000!');
  });