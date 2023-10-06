const { prisma } = require('../config/prisma')

const getAllMahasiswa = async () => {
    try {
        const mahasiswa = await prisma.mahasiswa.findMany({
            select: {
                id: true,
                nama: true,
                nim: true,
                jurusan: true
            }
        })
        return mahasiswa

    } catch (error) {
        console.error(error)
        return error
    }
}

const getMahasiswaById = async (id) => {
    try {
        const mahasiswa = await prisma.mahasiswa.findMany({
            where: {
                id: Number(id)
            }
        })
        return mahasiswa

    } catch (error) {
        console.error(error)
        return error
    } 
}

const createMahasiswa = async (body) => {    
    try {
        const {nama, nim, jurusan} = body;
        const createdMahasiswa = await prisma.mahasiswa.create({
            data: {
                nama,
                nim,
                jurusan
            }
        })
        return createdMahasiswa

    } catch (error) {
        console.error(error)
        return error
    }
}

const updateMahasiswa = async (id, body) => {
    try {
        const { nama, nim, jurusan } = body
        const updatedMahasiswa = await prisma.mahasiswa.update({
            where: {
                id: Number(id)
            },
            data: {
                nama: nama,
                nim: nim,
                jurusan: jurusan
            }
        })
        return updatedMahasiswa

    } catch (error) {
        console.log(error)
        return error
    }
}

const deleteMahasiswa = async (id) => {
    try {
        const deletedMahasiswa = await prisma.mahasiswa.delete({
            where: {
                id: Number(id)
            }
        })
        return deletedMahasiswa

    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = { getAllMahasiswa, getMahasiswaById, createMahasiswa, updateMahasiswa, deleteMahasiswa }