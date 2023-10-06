const blogService = require('../services/blogService')
const { prisma } = require('../config/prisma')

const existingData = async (id) => {
    const exist = await prisma.blog.findMany({
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

const getAllBlog = async (req, res) => {
    const blog = await blogService.getAllBlog()
    res.status(200).json({
        massage: "Sukses mengambil data",
        data: blog
    })
}

const getBlogById = async (req, res) => {
    const { id } = req.params

    const blog = await blogService.getBlogById(id)
    if (!blog || blog.length === 0) {
        res.status(404).json({
            massage: `Data dengan id = ${id} tidak ditemukan`
        })
    } else {
        res.status(200).json({
            massage: "Sukses mengambil data",
            data: blog
        })
    }
}

const createBlog = async (req, res) => {
    const createdBlog = await blogService.createBlog(req.body)
    res.status(200).json({
        massage: "Sukses menambahkan data",
        data: createdBlog
    })
}

const updateBlog = async (req, res) => {
    const { id } = req.params

    const exist = await existingData(id)
    if (!exist) {
        return res.status(404).json({ massage: `Data dengan id = ${id} tidak ditemukan` });
    }

    const updatedBlog = await blogService.updateBlog(id, req.body)
    res.status(200).json({
            massage: `Sukses update data pada id = ${id}`,
            data: updatedBlog
    })
}

const deleteBlog = async (req, res) => {
    const { id } = req.params

    const exist = await existingData(id)
    if (!exist) {
        return res.status(404).json({ massage: `Data dengan id = ${id} tidak ditemukan` });
    }

    const deletedBlog = await blogService.deleteBlog(id)
    res.status(200).json({
        massage: `Sukses menghapus data dengan id = ${id}`,
        data: deletedBlog
    })


}

module.exports = { getAllBlog, getBlogById, createBlog, updateBlog, deleteBlog }