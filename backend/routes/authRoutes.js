const express = require('express')

const router = express.Router()

const { signupUser, getAllUsers, loginUser } = require('../controllers/authController')

router.post('/signup', signupUser)
router.post('/login',loginUser)

router.get('/users',getAllUsers)

module.exports = router