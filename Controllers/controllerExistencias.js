const Existencias = require('../Models/modeloExistencias');

// Obtener todos los productos
const obtenerExistencias = async (req, res) => {
    try {
      // Realiza join de las tablas 'Productos', 'Stores' y 'Existencias'
      const existencias = await Existencias.findAll();
      res.status(200).send(existencias);
    } catch (err) {
      console.error('Error al obtener Productos: ', err);
      res.status(500).send('Error al obtener Productos');
    }
  };

  module.exports = { obtenerExistencias : obtenerExistencias };