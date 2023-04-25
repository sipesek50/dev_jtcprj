async function async_query(query, data) {
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'dev_jtcprj'
    })
    const [rows, fields] = await conn.execute(query, data)
    return await [rows, fields]
}

module.exports = async_query