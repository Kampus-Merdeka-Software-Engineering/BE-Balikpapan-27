const express = require('express');
const mahasiswaController = require('../controllers/mahasiswaController');
const { prisma } = require('../config/prisma');

const mahasiswaRoutes = express.Router();

mahasiswaRoutes.get('/', mahasiswaController.getAllMahasiswa)
//mahasiswaRoutes.get('/:id', mahasiswaController.getMahasiswaById)
mahasiswaRoutes.post('/', async (req, res, next) => {
    const { nama, nim, jurusan } = req.body;

    const result = await prisma.mahasiswa.create({
        data: {
            nama: nama,
            nim: nim,
            jurusan: jurusan
        }
    })
    res.json({
        data: result,
        massage: 'user created'
    })
})
mahasiswaRoutes.patch('/:id', mahasiswaController.updateMahasiswa)


module.exports = { mahasiswaRoutes }