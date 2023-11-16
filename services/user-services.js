const db = require('../db')

module.exports.getAllUsers = async () => {
    const [rows] = await db.query("select * from users")
    .catch(err => console.log(err))
    return rows;
}