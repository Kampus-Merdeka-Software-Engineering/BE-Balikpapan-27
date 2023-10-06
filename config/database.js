const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    // host: process.env.DB_HOST || "localhost:3306",
    // user: process.env.DB_USER || "root",
    // password: process.env.BD_PASS || "",
    // database: process.env.BD_NAME || "express_mysql"

    uri: process.env.DB_URI
})

module.export = { pool }