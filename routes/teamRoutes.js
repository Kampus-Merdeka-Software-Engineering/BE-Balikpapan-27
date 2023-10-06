const express = require('express');
const teamController = require('../controllers/teamController');

const teamRoutes = express.Router();

teamRoutes.get('/', teamController.getAllTeam)
teamRoutes.get('/:id', teamController.getTeamById)
teamRoutes.post('/create', teamController.createTeam)
teamRoutes.put('/update/:id', teamController.updateTeam)
teamRoutes.delete('/delete/:id', teamController.deleteTeam)

module.exports = { teamRoutes }