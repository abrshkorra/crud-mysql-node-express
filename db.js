const mysql = require('mysql2/promise')
const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1354',
    database: 'users'
})

module.exports = mysqlPool