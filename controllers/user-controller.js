const express = require('express')
router = express.Router()

const db = require('../db')


router.get('/', async (req, res) => {
    const rows = await db.query("select * from users")
    .catch(data => console.log(err))
    res.send(rows)
})

module.exports = router