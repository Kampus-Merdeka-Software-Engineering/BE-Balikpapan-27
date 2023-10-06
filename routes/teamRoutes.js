const express = require('express');
const teamController = require('../controllers/teamController');

const teamRoutes = express.Router();

teamRoutes.get('/team', teamController.getAllTeam)
teamRoutes.get('/team/:id', teamController.getTeamById)
teamRoutes.post('/team', teamController.createTeam)

module.exports = { teamRoutes }