const express = require('express')

const router = express.Router()

const { signupUser, getAllUsers, loginUser, getProfile } = require('../controllers/authController')
const protect = require('../middlewares/authMiddleware')


router.post('/signup', signupUser)
router.post('/login',loginUser)

router.get('/users',getAllUsers)
router.get('/profile',protect,getProfile)

module.exports = router