const express = require('express')
const { GET, POST, DELETE, PUT } = require('./controller')
const router = express.Router()

router.route('/api/todo*')
      .get(GET)
      .post(POST)
      .delete(DELETE)
      .put(PUT)

module.exports = router
