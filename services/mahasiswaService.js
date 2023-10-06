const { pool } = require ('../config/database')
const { prisma } = require('../config/prisma')

const getAllMahasiswa = async () => {
    //const connection = await pool.getConnection();
    try {
        // const [mahasiswa] = await connection.query('SELECT * FROM mahasiswa');
        // return mahasiswa
        const mahasiswa = await prisma.mahasiswa.findMany({
            select: {
                id: true,
                nama: true,
                nim: true,
                jurusan: true,
                createAt: false,
                updateAt: false
            }
        })
        return mahasiswa

    } catch (error) {
        console.error(error)
        return error
    }
}

// const getMahasiswaById = async (userId) => {
//     try {
//         const mahasiswa = await prisma.mahasiswa.findUnique({
//             where: {id:Number(userId)}
            
//         })
//         return mahasiswa

//     } catch (error) {
//         console.error(error)
//         return error
//     } 
// }

const createMahasiswa = async (reqBody) => {    
    try {
        const {nama, nim, jurusan} = reqBody;
        const createdMahasiswa = await prisma.mahasiswa.create({
            data: {
                nama: nama,
                nim: nim,
                jurusan: jurusan
            }
        })
        return createdMahasiswa

    } catch (error) {
        console.error(error)
        return error}
}

const updateMahasiswa = async (id, reqBody) => {
    try {
        const {nama, nim, jurusan} = reqBody
        const updatedMahasiswa = await prisma.mahasiswa.update({
            nama: nama,
            nim: nim,
            jurusan: jurusan
        })
        return updatedMahasiswa

    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = { getAllMahasiswa, createMahasiswa, updateMahasiswa }