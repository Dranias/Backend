const Productos = require('../Models/modeloProducto');
const Stores = require('../Models/modeloStores');
const generarNumeroAleatorio = require('./generadorCodigos');

// Agregar producto
const agregarProducto = async (req, res) => {
  // Obtiene los datos
  const { Marca, modelo, Tipo, identificador, precioPublico, precioDistribuidor, costo, cantidadAlmacen, localUno, localDos } = req.body;

  try {
    // Genera un número aleatorio de 13 dígitos que será el ID.
    const id = generarNumeroAleatorio();
    // Crea un nuevo producto en la tabla 'Productos'
    const producto = await Productos.create({ id, Marca, modelo, Tipo, identificador });
    console.log('Producto creado:', producto);

    // Crea un nuevo registro en la tabla 'Stores' con el ID del producto recién creado
    const store = await Stores.create({ idProducto: producto.id, precioPublico, precioDistribuidor, costo, cantidadAlmacen, localUno, localDos });
    console.log('Almacén creado:', store);

    // Devuelve una respuesta exitos
    res.status(200).send('Producto y Almacen agregados');
  } catch (err) {
    // Si se produce un error, devuelve un mensaje de error
    console.error('Error al agregar Producto y Almacen: ', err);
    res.status(500).send('Error al agregar Producto y Almacen');
  }
};

// Eliminar producto
const eliminarProducto = async (req, res) => {
  // Obtiene el ID del producto
  const { id } = req.params;

  try {
    // Busca el producto en la tabla
    const producto = await Productos.findOne({ where: { id } });
    if (!producto) {
      return res.status(404).send(`Producto con id ${id} no encontrado`);
    }

    // Elimina el registro correspondiente en la tabla 'Stores'
    await Stores.destroy({ where: { idProducto: id } });

    // Elimina el registro del producto en la tabla 'Productos'
    await Productos.destroy({ where: { id } });

    // Devuelve una respuesta exitosa
    res.status(200).send(`Producto con id ${id} eliminado`);
  } catch (err) {
    // Si se produce un error, devuelve un mensaje de error
    console.error(`Error al eliminar Producto con id ${id}: `, err);
    res.status(500).send(`Error al eliminar Producto con id ${id}`);
  }
};

// Modificar producto y almacenamiento
const modificarProducto = async (req, res) => {
  // Obtiene el ID del producto
  const { id } = req.params;

  // Obtiene los datos
  const { Marca, modelo, Tipo, identificador, precioPublico, precioDistribuidor, costo, cantidadAlmacen, localUno, localDos } = req.body;

  try {
    // Busca el producto en la tabla 'Productos'
    const producto = await Productos.findOne({ where: { id } });
    if (!producto) {
      return res.status(404).send(`Producto con id ${id} no encontrado`);
    }

    // Actualiza los datos del producto
    await producto.update({ Marca, modelo, Tipo, identificador });

    // Busca el registro del almacén correspondiente en la tabla 'Stores'
    const store = await Stores.findOne({ where: { idProducto: id } });
    if (!store) {
      return res.status(404).send(`Registro de almacenamiento para el producto con id ${id} no encontrado`);
    }

    // Actualiza los datos del almacenamiento
    await store.update({ precioPublico, precioDistribuidor, costo, cantidadAlmacen, localUno, localDos });

    // Devuelve una respuesta exitosa al cliente
    res.status(200).send(`Producto con id ${id} modificado`);
  } catch (err) {
    // Si se produce un error, devuelve un mensaje de error al cliente
    console.error(`Error al modificar Producto con id ${id}: `, err);
    res.status(500).send(`Error al modificar Producto con id ${id}`);
  }
};

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    // Realiza join de las tablas 'Productos' y 'Stores'
    const productosStore = await Productos.findAll({
      attributes: ['Marca', 'modelo', 'Tipo', 'identificador'],
      include: [{
        model: Stores,
        attributes: ['precioPublico', 'precioDistribuidor', 'costo', 'cantidadAlmacen', 'localUno', 'localDos']
      }]
    });
    res.status(200).send(productosStore);
  } catch (err) {
    console.error('Error al obtener Productos: ', err);
    res.status(500).send('Error al obtener Productos');
  }
};

//Buscar productos por Marca
const buscarPorMarca = async (req, res) => {
  const { marca } = req.params;
  try {
    // Realiza join de las tablas 'Productos' y 'Stores'
    const productosMarca = await Productos.findAll({
      attributes: ['Marca', 'modelo', 'Tipo', 'identificador'],
      include: [{
        model: Stores,
        attributes: ['precioPublico', 'precioDistribuidor', 'costo', 'cantidadAlmacen', 'localUno', 'localDos']
      }],
      where: {
        Marca: marca
      }
    });
    res.status(200).send(productosMarca);
  } catch (err) {
    console.error('Error al obtener Productos por marca ', err);
    res.status(500).send('Error al obtener Productos');
  }
};

//Buscar productos por Marca y Modelo
const buscarPorMarcaYModelo = async (req, res) => {
  const { marca, modelo } = req.params;
  try {
    // Realiza join de las tablas 'Productos' y 'Stores'
    const productosMarcayModelo = await Productos.findAll({
      attributes: ['Marca', 'modelo', 'Tipo', 'identificador'],
      include: [{
        model: Stores,
        attributes: ['precioPublico', 'precioDistribuidor', 'costo', 'cantidadAlmacen', 'localUno', 'localDos']
      }],
      where: {
        Marca: marca,
        modelo: modelo
      }
    });
    res.status(200).send(productosMarcayModelo);
  } catch (err) {
    console.error('Error al obtener Productos por marca ', err);
    res.status(500).send('Error al obtener Productos');
  }
};

// Exporta la función
module.exports = { agregarProducto: agregarProducto, eliminarProducto: eliminarProducto, 
                  modificarProducto: modificarProducto,  obtenerProductos: obtenerProductos,
                  buscarPorMarca : buscarPorMarca, buscarPorMarcaYModelo: buscarPorMarcaYModelo};


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

