const mahasiswaService = require('../services/mahasiswaService');
const { prisma } = require('../config/prisma')

const getAllMahasiswa = async (req,res) => {
    const mahasiswa = await mahasiswaService.getAllMahasiswa()
    res.status(200).json({
        massage: "Sukses dalam mengambil data",
        data: mahasiswa
    })
}

const getMahasiswaById = async (req, res) => {
    const mahasiswa = await mahasiswaService.getMahasiswaById(req.params.id)
    if (!mahasiswa || mahasiswa.length === 0) {
        res.status(404).json({
            massage: `Data dengan id = ${req.params.id} tidak ditemukan`
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
    const existingData = await prisma.mahasiswa.findUnique({
        where: {
          id: parseInt(req.params.id),
        },
    });

    if (!existingData) {
        return res.status(404).json({ massage: `Data dengan id = ${req.params.id} tidak ditemukan` });
    }

    const updatedMahasiswa = await mahasiswaService.updateMahasiswa(req.params.id, req.body)
    res.status(200).json({
            massage: "Sukses update data",
            data: updatedMahasiswa
    })
}
        
const deleteMahasiswa = async (req, res) => {
    const existingData = await prisma.mahasiswa.findUnique({
        where: {
          id: parseInt(req.params.id),
        },
    });

    if (!existingData) {
        return res.status(404).json({ massage: `Data dengan id = ${req.params.id} tidak ditemukan` });
    }

    const deletedMahasiswa = await mahasiswaService.deleteMahasiswa(req.params.id)
    res.status(200).json({
        massage: `Sukses menghapus data dengan id = ${req.params.id}`,
        data: deletedMahasiswa
    })
}
    


module.exports = { getAllMahasiswa, getMahasiswaById, createMahasiswa, updateMahasiswa, deleteMahasiswa }