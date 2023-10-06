const teamService = require('../services/teamService')
const { prisma } = require('../config/prisma')

const existingData = async (id) => {
    const exist = await prisma.team.findMany({
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

const getAllTeam = async (req, res) => {
    const team = await teamService.getAllTeam()
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: team
    })
}

const getTeamById = async (req, res) => {
    const { id } = req.params

    const team = await teamService.getTeamById(id)

    if (!team || team.length === 0) {
        res.status(404).json({
            massage: `Data dengan id = ${id} tidak ditemukan`
        })
    } else {
        res.status(200).json({
            massage: "Sukses mengambil data",
            data: team
        })
    }
}

const createTeam = async (req, res) => {
    const createdTeam = await teamService.createTeam(req.body)
    res.status(200).json({
        massage: "Sukses menambahkan data",
        data: createdTeam
    })
}

const updateTeam = async (req, res) => {
    const { id } = req.params

    const exist = await existingData(id)
    if (!exist) {
        return res.status(404).json({ massage: `Data dengan id = ${id} tidak ditemukan` });
    }

    const updatedTeam = await teamService.updateTeam(id, req.body)
    res.status(200).json({
            massage: `Sukses update data pada id = ${id}`,
            data: updatedTeam
    })
}

const deleteTeam = async (req, res) => {
    const { id } = req.params

    const exist = await existingData(id)
    if (!exist) {
        return res.status(404).json({ massage: `Data dengan id = ${id} tidak ditemukan` });
    }

    const deletedTeam = await teamService.deleteTeam(id)
    res.status(200).json({
        massage: `Sukses menghapus data dengan id = ${id}`,
        data: deletedTeam
    })
}

module.exports = { getAllTeam, getTeamById, createTeam, updateTeam, deleteTeam }