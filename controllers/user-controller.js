const express = require('express'),
service = require('../services/user-services')
router = express.Router()



router.get('/', async (req, res) => {
    const users = await service.getAllUsers()
    res.send(users)
})

module.exports = router