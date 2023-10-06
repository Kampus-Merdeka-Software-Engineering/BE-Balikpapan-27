const mahasiswaService = require('../services/mahasiswaService');
const { prisma } = require('../config/prisma')

const getAllMahasiswa = async (req,res) => {
    const mahasiswa = await mahasiswaService.getAllMahasiswa()
    res.status(200).json({
        massage: "Sukses dalam mengambil data",
        data: mahasiswa
    })
}

// const getMahasiswaById = async (req, res) => {
//     const mahasiswa = await mahasiswaService.getMahasiswaById(req.params.id)
//     res.status(200).json({
//         massage: "Sukses mengambil data",
//         data: mahasiswa
//     })
// }

const createMahasiswa = async (req,res) => {
    const createdMahasiswa = await mahasiswaService.createMahasiswa(req.body)
    res.status(201).json({
        massage: "Sukses menambahkan data",
        data: createdMahasiswa
    })
}

const updateMahasiswa = async (req,res) => {
    const updatedMahasiswa = await mahasiswaService.updateMahasiswa(req.params.id, req.body)
    res.status(200).json({
        massage: "Sukses update data",
        data: updatedMahasiswa
    })
}

module.exports = { getAllMahasiswa, createMahasiswa, updateMahasiswa }