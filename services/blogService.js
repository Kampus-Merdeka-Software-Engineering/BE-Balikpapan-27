const { pool } = require('../config/database');

const getAllBlog = async () => {
    const connection = await pool.getConnection();
    try {
        const [blog] = await connection.query('SELECT * FROM blog');
        return blog

    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }   
}

const getBlogById = async (id) => {
    const connection = await pool.getConnection();
    try {
        const [blog] = await connection.query('SELECT * FROM blog WHERE id = ?', [id]);
        return blog

    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }   
}

const createBlog = async (blog) => {
    const connection = await pool.getConnection();
    try {
        //tabel blog belum fix
        const createdBlog = await connection.query('INSERT INTO blog (nama, nim, username, email, password, dob) VALUES (?, ?, ?, ?, ?, ?)', [mahasiswa.nama, mahasiswa.nim, mahasiswa.username, mahasiswa.email, mahasiswa.password, mahasiswa.dob]);

        return createdBlog
        //atau return createdMahasiswa.id biar gak semua info dari mahasiswa direturn (utamanya password)
    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }
}

module.exports = { getAllBlog, getBlogById, createBlog }