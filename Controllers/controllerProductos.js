const Productos = require('../Models/modeloProducto');
const Stores = require('../Models/modeloStores');
const express = require('express');

const app = express();

app.use(express.json());

/* Agrega a producto
app.post('/productos', async (req, res) => {
  const { id, Marca, modelo, Tipo, identificador } = req.body;

  try {
    const producto = await Productos.create({ id, Marca, modelo, Tipo, identificador });

    console.log('Product added to database!');
    res.status(200).send('Product added to database');
  } catch (err) {
    console.error('Error adding product: ', err);
    res.status(500).send('Error adding product');
  }
});
*/

app.post('/productos', async (req, res) => {
  const { id, Marca, modelo, Tipo, identificador, precioPublico, precioDistribuidor, costo, cantidadAlmacen, localUno, localDos } = req.body;

  try {
    const producto = await Productos.create({ id, Marca, modelo, Tipo, identificador });

    const store = await Stores.create({ idProducto: producto.id, precioPublico, precioDistribuidor, costo, cantidadAlmacen, localUno, localDos });

    console.log('Producto y Almacen agregados');
    res.status(200).send('Producto y Almacen agregados');
  } catch (err) {
    console.error('Error al agregar Producto y Almacen: ', err);
    res.status(500).send('Error al agregar Producto y Almacen');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

/*
En postman
    {
        "id": "LGSTY2MICVID",
        "Marca": "LG",
        "modelo": "STYLUS 2",
        "Tipo": "MICA",
        "identificador": "VIDRIO",
        "precioPublico": 150.00,
        "precioDistribuidor": 120.00,
        "costo": 80.00,
        "cantidadAlmacen": 50,
        "localUno": 20,
        "localDos": 30
    }

*/

