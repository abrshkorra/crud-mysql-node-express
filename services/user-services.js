const db = require('../db')

module.exports.getAllUsers = async () => {
    const [users] = await db.query("select * from users")
    return users;
}

module.exports.getUserById = async (id) => {
    const [user] = await db.query("select * from users where user_id = ?", [id])
    return user;
}

module.exports.deleteUser = async (id) => {
    const [user] = await db.query("delete from users where user_id = ?", [id])
    return user.affectedRows;
}