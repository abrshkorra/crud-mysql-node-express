const express = require('express'),
service = require('../services/user-services')
router = express.Router()



router.get('/', async (req, res) => {
    const users = await service.getAllUsers()
    res.send(users)
})

router.get('/:id', async (req, res) => {
    const user = await service.getUserById(req.params.id)
    if (user.length == 0)
        res.status(404).json('no record by the given id')
    else
        res.send(user)
})

router.delete('/:id', async (req, res) => {
    const affectedRows = await service.deleteUser(req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record by the given id')
    else
        res.send('user deleted.')
})

router.post('/', async (req, res) => {
    try {
        const affectedRows = await service.addorEditUser(req.body);
        res.status(201).json({ message: "Add or edit successful", affectedRows });
    } catch (error) {
        console.error("Error adding or editing user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router