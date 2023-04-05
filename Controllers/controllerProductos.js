const express = require('express');
const router = express.Router();
const Productos = require('../Models/modeloProducto');
const Stores = require('../Models/modeloStores');
const generarNumeroAleatorio = require('./generadorCodigos');

// Agregar producto
const agregarProducto = async (req, res) => {
  console.log("Entramos a agregarProducto");

  // Obtiene los datos del cuerpo de la solicitud
  const { Marca, modelo, Tipo, identificador, precioPublico, precioDistribuidor, costo, cantidadAlmacen, localUno, localDos } = req.body;

  try {
    // Genera un número aleatorio de 13 dígitos.
    const id = generarNumeroAleatorio();
    // Crea un nuevo producto en la tabla 'Productos'
    const producto = await Productos.create({ id, Marca, modelo, Tipo, identificador });
    console.log('Producto creado:', producto);

    // Crea un nuevo registro en la tabla 'Stores' con el ID del producto recién creado
    const store = await Stores.create({ idProducto: producto.id, precioPublico, precioDistribuidor, costo, cantidadAlmacen, localUno, localDos });
    console.log('Almacén creado:', store);

    // Devuelve una respuesta exitosa al cliente
    res.status(200).send('Producto y Almacen agregados');
  } catch (err) {
    // Si se produce un error, devuelve un mensaje de error al cliente
    console.error('Error al agregar Producto y Almacen: ', err);
    res.status(500).send('Error al agregar Producto y Almacen');
  }
};

// Eliminar producto
const eliminarProducto = async (req, res) => {
  console.log("Entramos a eliminarProducto");

  // Obtiene el ID del producto de los parámetros de la solicitud
  const { id } = req.params;

  try {
    // Busca el producto en la tabla 'Productos'
    const producto = await Productos.findOne({ where: { id } });
    if (!producto) {
      return res.status(404).send(`Producto con id ${id} no encontrado`);
    }

    // Elimina el registro del almacén correspondiente en la tabla 'Stores'
    await Stores.destroy({ where: { idProducto: id } });

    // Elimina el registro del producto en la tabla 'Productos'
    await Productos.destroy({ where: { id } });

    // Devuelve una respuesta exitosa al cliente
    res.status(200).send(`Producto con id ${id} eliminado`);
  } catch (err) {
    // Si se produce un error, devuelve un mensaje de error al cliente
    console.error(`Error al eliminar Producto con id ${id}: `, err);
    res.status(500).send(`Error al eliminar Producto con id ${id}`);
  }
};

// Exporta las funciones
module.exports = { agregarProducto: agregarProducto, eliminarProducto: eliminarProducto };


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

