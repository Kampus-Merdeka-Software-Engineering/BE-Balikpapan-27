const mahasiswaService = require('../services/mahasiswaService')
const { prisma } = require('../config/prisma')

const existingData = async (id) => {
    const exist = await prisma.mahasiswa.findMany({
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

const getAllMahasiswa = async (req,res) => {
    const mahasiswa = await mahasiswaService.getAllMahasiswa()
    res.status(200).json({
        massage: "Sukses dalam mengambil data",
        data: mahasiswa
    })
}

const getMahasiswaById = async (req, res) => {
    const { id } = req.params
    const mahasiswa = await mahasiswaService.getMahasiswaById(id)
    if (!mahasiswa || mahasiswa.length === 0) {
        res.status(404).json({
            massage: `Data dengan id = ${id} tidak ditemukan`
        })
    } else {
        res.status(200).json({
            massage: "Sukses mengambil data",
            data: mahasiswa
        })
    }
}

const createMahasiswa = async (req,res) => {
    const createdMahasiswa = await mahasiswaService.createMahasiswa(req.body)
    res.status(200).json({
        massage: "Sukses menambahkan data",
        data: createdMahasiswa
    })
}

const updateMahasiswa = async (req,res) => {
    const { id } = req.params

    const exist = await existingData(id)
    if (!exist) {
        return res.status(404).json({ massage: `Data dengan id = ${id} tidak ditemukan` });
    }

    const updatedMahasiswa = await mahasiswaService.updateMahasiswa(id, req.body)
    res.status(200).json({
            massage: `Sukses update data pada id = ${id}`,
            data: updatedMahasiswa
    })
}
        
const deleteMahasiswa = async (req, res) => {
    const { id } = req.params

    const exist = await existingData(id)
    if (!exist) {
        return res.status(404).json({ massage: `Data dengan id = ${id} tidak ditemukan` });
    }

    const deletedMahasiswa = await mahasiswaService.deleteMahasiswa(id)
    res.status(200).json({
        massage: `Sukses menghapus data dengan id = ${id}`,
        data: deletedMahasiswa
    })
}
    


module.exports = { getAllMahasiswa, getMahasiswaById, createMahasiswa, updateMahasiswa, deleteMahasiswa }