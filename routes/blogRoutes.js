const express = require('express');
const blogController = require('../controllers/blogController');

const blogRoutes = express.Router();

blogRoutes.get('/blog', blogController.getAllBlog)
blogRoutes.get('/blog/:id', blogController.getBlogById)
blogRoutes.post('/blog', blogController.createBlog)

module.exports = { blogRoutes }