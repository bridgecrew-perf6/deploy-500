const express = require("express")
const router = express.Router()
const UserController = require("../Controller/User")


router.post('/register', UserController.register)


module.exports = router
