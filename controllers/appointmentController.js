const appointmentService = require('../services/appointmentService')
const { prisma } = require('../config/prisma')

const existingData = async (id) => {
    const exist = await prisma.appointment.findMany({
        where: {
          id: parseInt(id),
        },
    });
    
    if (exist.length === 0) {
        return false
    } else {
        return true
    }
} 

const getAllAppointment = async (req, res) => {
    const appointment = await appointmentService.getAllAppointment()
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: appointment
    })
}

const getAppointmentById = async (req, res) => {
    const { id } = req.params
    const appointment = await appointmentService.getAppointmentById(id)
    if (!appointment || appointment.length === 0) {
        res.status(404).json({
            massage: `Data dengan id = ${id} tidak ditemukan`
        })
    } else {
        res.status(200).json({
            massage: "Sukses mengambil data",
            data: appointment
        })
    }
}

const createAppointment = async (req, res) => {
    const createdAppointment = await appointmentService.createAppointment(req.body)
    res.status(201).json({
        massage: "Sukses menambahkan data",
        data: createdAppointment
    })
}

const updateAppointment = async (req, res) => {
    const { id } = req.params

    const exist = await existingData(id)
    if (!exist) {
        return res.status(404).json({ massage: `Data dengan id = ${id} tidak ditemukan` });
    }

    const updatedAppointment = await appointmentService.updateAppointment(id, req.body)
    res.status(200).json({
        massage: `Sukses update data pada id = ${id}`,
        data: updatedAppointment
    })
}

const deleteAppointment = async (req, res) => {
    const { id } = req.params
    
    const exist = await existingData(id)
    if (!exist) {
        return res.status(404).json({ massage: `Data dengan id = ${id} tidak ditemukan` });
    }

    const deletedAppointment = await appointmentService.deleteAppointment(id)
    res.status(200).json({
        massage: `Sukses menghapus data dengan id = ${id}`,
        data: deletedAppointment
    })
}


module.exports = { getAllAppointment, getAppointmentById, createAppointment, updateAppointment, deleteAppointment }