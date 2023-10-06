const { pool } = require('../config/database');

const getAllTeam = async () => {
    const connection = await pool.getConnection();
    try {
        const [team] = await connection.query('SELECT * FROM team');
        return team

    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }   
}

const getTeamById = async (id) => {
    const connection = await pool.getConnection();
    try {
        const [team] = await connection.query('SELECT * FROM team WHERE id = ?', [id]);
        return team

    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }   
}

const createTeam = async (team) => {
    const connection = await pool.getConnection();
    try {
        //table team belum fix
        const createdTeam = await connection.query('INSERT INTO team (nama, nim, username, email, password, dob) VALUES (?, ?, ?, ?, ?, ?)', [mahasiswa.nama, mahasiswa.nim, mahasiswa.username, mahasiswa.email, mahasiswa.password, mahasiswa.dob]);

        return createdTeam
        //atau return createdMahasiswa.id biar gak semua info dari mahasiswa direturn (utamanya password)
    } catch (error) {
        console.error(error)
        return error

    } finally {
        connection.release()
    }
}

module.exports = { getAllTeam, createTeam, getTeamById }