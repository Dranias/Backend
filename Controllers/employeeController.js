const Employees = require('../Models/modeloEmployees');

// Agregar producto
const addEmployee = async (req, res) => {
    // Obtiene los datos
    const { idEmpleado, user, password, level, name, address, phone } = req.body;
    try{
        const employee = await Employees.create({idEmpleado, user, password, level, name, address, phone });
        res.status(200).send('Empleado creado');
    }catch (err) {
      // Si se produce un error, devuelve un mensaje de error
      console.error('Error al agregar empleado: ', err);
      res.status(500).send('Error al agregar empleado.');
    }
  };

//Exporta las funciones
module.exports = { addEmployee: addEmployee };