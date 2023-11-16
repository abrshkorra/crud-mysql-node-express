const express = require('express')
router = express.Router()

const db = require('../db')


router.get('/', (req, res) => {
    db.query("select * from users")
    .then(data => res.send(data[0]))
    .catch(data => console.log(err))
})

module.exports = router