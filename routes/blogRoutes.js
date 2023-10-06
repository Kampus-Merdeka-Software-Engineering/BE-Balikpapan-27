const express = require('express');
const blogController = require('../controllers/blogController');

const blogRoutes = express.Router();

blogRoutes.get('/', blogController.getAllBlog)
blogRoutes.get('/:id', blogController.getBlogById)
blogRoutes.post('/create', blogController.createBlog)
blogRoutes.put('/update/:id', blogController.updateBlog)
blogRoutes.delete('/delete/:id', blogController.deleteBlog)

module.exports = { blogRoutes }