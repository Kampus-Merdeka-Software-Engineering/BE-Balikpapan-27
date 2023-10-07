const { prisma } = require('../config/prisma')

const getAllBlog = async () => {
    try {
        const blog = await prisma.blog.findMany({
            select: {
                id: true,
                foto: true,
                judul: true,
                penulis: true,
                tanggal_terbit: true,
                isi_blog: true
            }
        })
        return blog

    } catch (error) {
        console.error(error)
        return error
    }
}

const getBlogById = async (id) => {
    try {
        const blog = await prisma.blog.findMany({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                foto: true,
                judul: true,
                penulis: true,
                tanggal_terbit: true,
                isi_blog: true
            }
        })
        return blog

    } catch (error) {
        console.error(error)
        return error
    }
}

const createBlog = async (body) => {
    try {
        const { foto, judul, penulis, tanggal_terbit, isi_blog } = body;
        const createdBlog = await prisma.blog.create({
            data: {
                foto,
                judul,
                penulis,
                tanggal_terbit,
                isi_blog
            }
        })
        return createdBlog

    } catch (error) {
        console.error(error)
        return error
    }
}

const updateBlog = async (id, body) => {
    try {
        const { foto, judul, penulis, tanggal_terbit, isi_blog } = body;
        const updatedBlog = await prisma.blog.update({
            where: {
                id: Number(id)
            },
            data: {
                foto: foto,
                judul: judul,
                penulis: penulis,
                tanggal_terbit: tanggal_terbit,
                isi_blog: isi_blog
            }
        })
        return updatedBlog

    } catch (error) {
        console.log(error)
        return error
    }
}

const deleteBlog = async (id) => {
    try {
        const deletedBlog = await prisma.blog.delete({
            where: {
                id: Number(id)
            }
        })
        return deletedBlog

    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = { getAllBlog, getBlogById, createBlog, updateBlog, deleteBlog }