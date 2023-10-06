const teamService = require('../services/teamService');

const getAllTeam = async (req,res) => {
    const team = await teamService.getAllTeam()
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: team
    })
}

const getTeamById = async (req, res) => {
    const team = await teamService.getTeamById(req.params.id)
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: team
    })
}

const createTeam = async (req,res) => {
    const createdTeam = await teamService.createTeam(req.body)
    res.status(201).json({
        massage: "Sukses menambahkan data",
        data: createdTeam
    })
}


module.exports = { getAllTeam, getTeamById, createTeam }