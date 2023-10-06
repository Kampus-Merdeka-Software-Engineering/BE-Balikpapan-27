const appointmentService = require('../services/appointmentService');

const getAllAppointment = async (req,res) => {
    const appointment = await appointmentService.getAllAppointment()
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: appointment
    })
}

const getAppointmentById = async (req, res) => {
    const appointment = await appointmentService.getAppointmentById(req.params.id)
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: appointment
    })
}

const createAppointment = async (req,res) => {
    const createdAppointment = await appointmentService.createAppointment(req.body)
    res.status(201).json({
        massage: "Sukses menambahkan data",
        data: createdAppointment
    })
}


module.exports = { getAllAppointment, getAppointmentById, createAppointment }