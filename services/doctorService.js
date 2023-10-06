const { prisma } = require('../config/prisma')

const getAllDoctor = async () => {
    try {
        const doctor = await prisma.doctor.findMany({
            select: {
                id: true,
                nama: true,
                spesialis: true,
                jenis_kelamin: true,
                foto: true
            }
        })
        return doctor

    } catch (error) {
        console.error(error)
        return error
    }
}

const getDoctorById = async (id) => {
    try {
        const doctor = await prisma.doctor.findMany({
            where: {
                id: Number(id)
            }
        })
        return doctor

    } catch (error) {
        console.error(error)
        return error
    } 
}

const createDoctor = async (body) => {
    try {
        const { nama, spesialis, jenis_kelamin, foto } = body;
        const createdDoctor = await prisma.doctor.create({
            data: {
                nama,
                spesialis,
                jenis_kelamin,
                foto
            }
        })
        return createdDoctor

    } catch (error) {
        console.error(error)
        return error
    }
}

const updateDoctor = async (id, body) => {
    try {
        const { nama, spesialis, jenis_kelamin, foto } = body;
        const updatedDoctor = await prisma.doctor.update({
            where: {
                id: Number(id)
            },
            data: {
                nama: nama,
                spesialis: spesialis,
                jenis_kelamin: jenis_kelamin,
                foto: foto
            }
        })
        return updatedDoctor

    } catch (error) {
        console.log(error)
        return error
    }
}

const deleteDoctor = async (id) => {
    try {
        const deletedDoctor = await prisma.doctor.delete({
            where: {
                id: Number(id)
            }
        })
        return deletedDoctor

    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = { getAllDoctor, getDoctorById, createDoctor, updateDoctor, deleteDoctor }