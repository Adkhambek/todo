const express = require('express')
const { GET } = require('./controller')
const router = express.Router()

router.route('/')
      .get(GET)

module.exports = router