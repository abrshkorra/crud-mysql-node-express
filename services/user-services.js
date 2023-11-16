const db = require('../db')

module.exports.getAllUsers = async () => {
    const [rows] = await db.query("select * from users")
    return rows;
}

module.exports.getUserById = async (id) => {
    const [rows] = await db.query("select * from users where user_id = " + id)
    return rows;
}