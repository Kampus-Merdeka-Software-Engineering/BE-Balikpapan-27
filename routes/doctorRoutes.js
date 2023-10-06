const express = require('express');
const doctorController = require('../controllers/doctorController');

const doctorRoutes = express.Router();

doctorRoutes.get('/doctor', doctorController.getAllDoctor)
doctorRoutes.get('/doctor/:id', doctorController.getDoctorById)
doctorRoutes.post('/doctor', doctorController.createDoctor)

module.exports = { doctorRoutes }