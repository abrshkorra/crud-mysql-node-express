const mysql = require('mysql2/promise')
const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1354',
    database: 'users'
})

mysqlPool.query("select * from users")
.then(data => console.log(data))
.catch(err => console.log(err))