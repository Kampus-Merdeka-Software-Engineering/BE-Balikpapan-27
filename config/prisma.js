//bikin module prisma connector ke database

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = { prisma }
