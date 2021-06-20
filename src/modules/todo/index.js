const express = require('express')
const { GET, POST, DELETE } = require('./controller')
const router = express.Router()

router.route('/api/todo*')
      .get(GET)
      .post(POST)
      .delete(DELETE)

module.exports = router
