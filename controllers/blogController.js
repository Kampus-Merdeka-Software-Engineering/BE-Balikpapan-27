const blogService = require('../services/blogService');

const getAllBlog = async (req,res) => {
    const blog = await blogService.getAllBlog()
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: blog
    })
}

const getBlogById = async (req, res) => {
    const blog = await blogService.getBlogById(req.params.id)
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: blog
    })
}

const createBlog = async (req,res) => {
    const createdBlog = await blogService.createBlog(req.body)
    res.status(201).json({
        massage: "Sukses menambahkan data",
        data: createdBlog
    })
}


module.exports = { getAllBlog, getBlogById, createBlog }