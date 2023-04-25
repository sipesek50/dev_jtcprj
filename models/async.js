require('dotenv').config()

async function async_query(query, data) {
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABSE_DATABASE
    })
    const [rows, fields] = await conn.execute(query, data)
    return await [rows, fields]
}

module.exports = async_query