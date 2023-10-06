const express = require('express');
const appointmentController = require('../controllers/appointmentController');

const appointmentRoutes = express.Router();

appointmentRoutes.get('/', appointmentController.getAllAppointment)
appointmentRoutes.get('/:id', appointmentController.getAppointmentById)
appointmentRoutes.post('/create', appointmentController.createAppointment)
appointmentRoutes.put('/update/:id', appointmentController.updateAppointment)
appointmentRoutes.delete('/delete/:id', appointmentController.deleteAppointment)

module.exports = { appointmentRoutes }