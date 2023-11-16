const express = require('express'),
service = require('../services/user-services')
router = express.Router()



router.get('/', async (req, res) => {
    const users = await service.getAllUsers()
    res.send(users)
})

router.get('/:id', async (req, res) => {
    const user = await service.getUserById(req.params.id)
    res.send(user)
})

module.exports = router