const express = require('express');
const doctorController = require('../controllers/doctorController');

const doctorRoutes = express.Router();

doctorRoutes.get('/', doctorController.getAllDoctor)
doctorRoutes.get('/:id', doctorController.getDoctorById)
doctorRoutes.post('/create', doctorController.createDoctor)
doctorRoutes.put('/update/:id', doctorController.updateDoctor)
doctorRoutes.delete('/delete/:id', doctorController.deleteDoctor)

module.exports = { doctorRoutes }