const { prisma } = require('../config/prisma')

const getAllAppointment = async () => {
    try {
        const appointment = await prisma.appointment.findMany({
            select: {
                id: true,
                nama: true,   
                telp: true,   
                tanggal: true,
                dokter: true,
                pesan: true
            }
        })
        return appointment

    } catch (error) {
        console.error(error)
        return error 
    }
}

const getAppointmentById = async (id) => {
    try {
        const appointment = await prisma.appointment.findMany({
            where: {
                id: Number(id)
            }
        })
        return appointment

    } catch (error) {
        console.error(error)
        return error  
    }
}

const createAppointment = async (body) => {
    try {
        const { nama, telp, tanggal, dokter, pesan } = body
        const createdAppointment = await prisma.appointment.create({
            data: {
                nama,
                telp,
                tanggal,
                dokter,
                pesan
            }
        })
        return createdAppointment

    } catch (error) {
        console.error(error)
        return error
    }
}

const updateAppointment = async (id, body) => {
    try {
        const { nama, telp, tanggal, dokter, pesan } = body
        const updatedAppointment = await prisma.appointment.update({
            where: {
                id: Number(id)
            },
            data: {
                nama: nama,
                telp: telp,
                tanggal: tanggal,
                dokter: dokter,
                pesan: pesan
            }
        })
        return updatedAppointment

    } catch (error) {
        console.log(error)
        return error
    }
}

const deleteAppointment = async (id) => {
    try {
        const deletedAppointment = await prisma.appointment.delete({
            where: {
                id: Number(id)
            }
        })
        return deletedAppointment

    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = { getAllAppointment, createAppointment, getAppointmentById, updateAppointment, deleteAppointment }