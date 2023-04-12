const express = require('express');
const app = express();
const { obtenerExistencias } = require('./Controllers/controllerExistencias');

app.use(express.json());

// Obtener productos
app.get('/existencias', obtenerExistencias);

app.listen(3000, () => {
    console.log('Server listening on port 3000!');
  });