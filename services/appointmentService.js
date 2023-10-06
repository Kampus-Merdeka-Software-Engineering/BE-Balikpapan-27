const { pool } = require('../config/database');

const getAllAppointment = async () => {
    const connection = await pool.getConnection();
    try {
        const [appointment] = await connection.query('SELECT * FROM appointment');
        return appointment

    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }   
}

const getAppointmentById = async (id) => {
    const connection = await pool.getConnection();
    try {
        const [appointment] = await connection.query('SELECT * FROM appointment WHERE id = ?', [id]);
        return appointment

    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }   
}

const createAppointment = async (appointment) => {
    const connection = await pool.getConnection();
    try {
        //table appointment belum fix
        const createdAppointment = await connection.query('INSERT INTO appointment (nama, nim, username, email, password, dob) VALUES (?, ?, ?, ?, ?, ?)', [mahasiswa.nama, mahasiswa.nim, mahasiswa.username, mahasiswa.email, mahasiswa.password, mahasiswa.dob]);

        return createdAppointment
        //atau return createdMahasiswa.id biar gak semua info dari mahasiswa direturn (utamanya password)
    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }
}

module.exports = { getAllAppointment, createAppointment, getAppointmentById }