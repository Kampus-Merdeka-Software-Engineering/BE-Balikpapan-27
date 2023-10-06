const { pool } = require('../config/database');

const getAllDoctor = async () => {
    const connection = await pool.getConnection();
    try {
        const [doctor] = await connection.query('SELECT * FROM doctor');
        return doctor

    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }   
}

const getDoctorById = async (id) => {
    const connection = await pool.getConnection();
    try {
        const [doctor] = await connection.query('SELECT * FROM doctor WHERE id = ?', [id]);
        return doctor

    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }   
}

const createDoctor = async (doctor) => {
    const connection = await pool.getConnection();
    try {
        //tabel blog belum fix
        const createdDoctor = await connection.query('INSERT INTO doctor (nama, nim, username, email, password, dob) VALUES (?, ?, ?, ?, ?, ?)', [mahasiswa.nama, mahasiswa.nim, mahasiswa.username, mahasiswa.email, mahasiswa.password, mahasiswa.dob]);

        return createdDoctor
        //atau return createdMahasiswa.id biar gak semua info dari mahasiswa direturn (utamanya password)
    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }
}

module.exports = { getAllDoctor, getDoctorById, createDoctor }