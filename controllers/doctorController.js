const doctorService = require('../services/doctorService');

const getAllDoctor = async (req,res) => {
    const doctor = await doctorService.getAllDoctor()
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: doctor
    })
}

const getDoctorById = async (req, res) => {
    const doctor = await doctorService.getDoctorById(req.params.id)
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: doctor
    })
}

const createDoctor = async (req,res) => {
    const createdDoctor = await doctorService.createDoctor(req.body)
    res.status(201).json({
        massage: "Sukses menambahkan data",
        data: createdDoctor
    })
}


module.exports = { getAllDoctor, getDoctorById, createDoctor }