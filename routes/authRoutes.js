const express = require('express')
const authRoutes = express.Router()
const authController = require('../controllers/authController')

authRoutes.post('/register', authController.register)

module.exports = authRoutes
