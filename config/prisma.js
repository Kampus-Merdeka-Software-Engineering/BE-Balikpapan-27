//bikin module prisma connector ke database

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

//prisma buat gantiin pool
module.exports = { prisma }
