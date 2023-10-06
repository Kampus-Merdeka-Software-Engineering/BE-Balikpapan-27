const express = require('express');
const mahasiswaController = require('../controllers/mahasiswaController');
const { prisma } = require('../config/prisma');

const mahasiswaRoutes = express.Router();

mahasiswaRoutes.get('/', mahasiswaController.getAllMahasiswa)
mahasiswaRoutes.get('/:id', mahasiswaController.getMahasiswaById)
mahasiswaRoutes.post('/create', mahasiswaController.createMahasiswa)
mahasiswaRoutes.put('/update/:id', mahasiswaController.updateMahasiswa)
mahasiswaRoutes.delete('/delete/:id', mahasiswaController.deleteMahasiswa)


module.exports = { mahasiswaRoutes }