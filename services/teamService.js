const { prisma } = require('../config/prisma')

const getAllTeam = async () => {
    try {
        const team = await prisma.team.findMany({
            select: {
                id: true,
                nama: true,
                divisi: true,
                linkedin: true,
                instagram: true,
                whatsapp: true,
                foto: true,
                logo_universitas: true 
            }
        })
        return team

    } catch (error) {
        console.error(error)
        return error
    }  
}

const getTeamById = async (id) => {
    try {
        const team = await prisma.team.findMany({
            where: {
                id: Number(id)
            }
        })
        return team

    } catch (error) {
        console.error(error)
        return error
    } 
}

const createTeam = async (body) => {
    try {
        const {nama, divisi, linkedin, instagram, whatsapp, foto, logo_universitas } = body;
        const createdTeam = await prisma.team.create({
            data: {
                nama,
                divisi,
                linkedin,
                instagram,
                whatsapp,
                foto,
                logo_universitas 
            }
        })
        return createdTeam

    } catch (error) {
        console.error(error)
        return error
    }
}

const updateTeam = async (id, body) => {
    try {
        const {nama, divisi, linkedin, instagram, whatsapp, foto, logo_universitas } = body;
        const updatedTeam = await prisma.team.update({
            where: {
                id: Number(id)
            },
            data: {
                nama: nama,
                divisi: divisi,
                linkedin: linkedin,
                instagram: instagram,
                whatsapp: whatsapp,
                foto: foto,
                logo_universitas: logo_universitas
            }
        })
        return updatedTeam

    } catch (error) {
        console.log(error)
        return error
    }
}

const deleteTeam = async (id) => {
    try {
        const deletedTeam = await prisma.team.delete({
            where: {
                id: Number(id)
            }
        })
        return deletedTeam

    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = { getAllTeam, createTeam, getTeamById, updateTeam, deleteTeam }