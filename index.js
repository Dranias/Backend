const express = require('express');
const app = express();
const { addEmployee } = require('./Controllers/employeeController');
         
app.use(express.json());

//Agregar empleado
app.post('/employees', addEmployee);

app.listen(3000, () => {
    console.log('Server listening on port 3000!');
  });