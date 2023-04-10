const express = require('express');
const app = express();
const { agregarProducto, eliminarProducto, modificarProducto, obtenerProductos, buscarPorMarca, 
         buscarPorMarcaYModelo, buscarPorId } = require('./Controllers/controllerProductos');
const Productos = require('./Models/modeloProducto');
const Stores = require('./Models/modeloStores');

app.use(express.json());

// Obtener productos
app.get('/productos', obtenerProductos);

// Agregar producto
app.post('/productos', agregarProducto);

// Eliminar producto
app.delete('/productos/:id', eliminarProducto);

// Obtener productos por id
app.get('/productos/:id', buscarPorId);

// Modificar productos
app.put('/productos/:id', modificarProducto);

// Obtener productos por marca
app.get('/productos/marca/:marca', buscarPorMarca);

// Obtener productos por marca y modelo
app.get('/productos/marca/:marca/modelo/:modelo', buscarPorMarcaYModelo);

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});