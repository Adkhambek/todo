const express = require('express')
const { GET, POST, DELETE } = require('./controller')
const router = express.Router()

router.route('/api/todo*')
      .get(GET)

module.exports = router

//36:24