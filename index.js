const express = require('express');
const app = express();
const { agregarProducto, eliminarProducto } = require('./Controllers/controllerProductos');

app.use(express.json());

// Agregar producto
app.post('/productos', agregarProducto);

// Eliminar producto
app.delete('/productos/:id', eliminarProducto);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Hubo un error en el servidor');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

/*
//Agregar producto
  app.use(express.json());
  app.use('/', controllerProductos);

  app.delete('/productos/:id', controllerProductos);

  app.listen(3000, () => {
    console.log('Server listening on port 3000!');
  });
  */