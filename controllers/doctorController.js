const doctorService = require('../services/doctorService')
const { prisma } = require('../config/prisma')

const existingData = async (id) => {
    const exist = await prisma.doctor.findMany({
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

const getAllDoctor = async (req, res) => {
    const doctor = await doctorService.getAllDoctor()
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: doctor
    })
}

const getDoctorById = async (req, res) => {
    const { id } = req.params

    const doctor = await doctorService.getDoctorById(id)
    if (!doctor || doctor.length === 0) {
        res.status(404).json({
            massage: `Data dengan id = ${id} tidak ditemukan`
        })
    } else {
        res.status(200).json({
            massage: "Sukses mengambil data",
            data: doctor
        })
    }
}

const createDoctor = async (req, res) => {
    const createdDoctor = await doctorService.createDoctor(req.body)
    res.status(201).json({
        massage: "Sukses menambahkan data",
        data: createdDoctor
    })
}

const updateDoctor = async (req, res) => {
    const { id } = req.params

    const exist = await existingData(id)
    if (!exist) {
        return res.status(404).json({ massage: `Data dengan id = ${id} tidak ditemukan` });
    }

    const updatedDoctor = await doctorService.updateDoctor(id, req.body)
    res.status(200).json({
            massage: `Sukses update data pada id = ${id}`,
            data: updatedDoctor
    })
}

const deleteDoctor = async (req, res) => {
    const { id } = req.params

    const exist = await existingData(id)
    if (!exist) {
        return res.status(404).json({ massage: `Data dengan id = ${id} tidak ditemukan` });
    }

    const deletedDoctor = await doctorService.deleteDoctor(id)
    res.status(200).json({
        massage: `Sukses menghapus data dengan id = ${id}`,
        data: deletedDoctor
    })
}


module.exports = { getAllDoctor, getDoctorById, createDoctor, updateDoctor, deleteDoctor }