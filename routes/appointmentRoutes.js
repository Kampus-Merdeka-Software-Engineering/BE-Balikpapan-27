const express = require('express');
const appointmentController = require('../controllers/appointmentController');

const appointmentRoutes = express.Router();

appointmentRoutes.get('/appointment', appointmentController.getAllAppointment)
appointmentRoutes.get('/appointment/:id', appointmentController.getAppointmentById)
appointmentRoutes.post('/appointment', appointmentController.createAppointment)

module.exports = { appointmentRoutes }