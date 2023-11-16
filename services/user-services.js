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
    const [{affectedRows}] = await db.query("delete from users where user_id = ?", [id])
    return affectedRows;
}

module.exports.addorEditUser = async (obj, id = 0) => {
    const [{affectedRows}] = await db.query("call add_or_edit(?,?,?,?)", [id, obj.email, obj.password, obj.name]);
    return affectedRows;
}

