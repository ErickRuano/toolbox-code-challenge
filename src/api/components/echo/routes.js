const express = require('express')
const router = express.Router()
const echoController = require('./getEchoController')

/* GET echo implementation. */
router.get('/iecho', echoController)

module.exports = router
