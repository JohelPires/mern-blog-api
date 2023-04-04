const User = require('../models/UserModel')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.status(StatusCodes.CREATED).json(user)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error)
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST).json('Por favor informe email e senha')
  } else {
    const user = await User.findOne({ email })
    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED).json('Usuário não encontrado.')
    } else {
      const isPasswordCorrect = await user.comparePassword(password)
      if (isPasswordCorrect) {
        token = jwt.sign({ email, userId: user._id }, process.env.JWT_SECRET)
        res.cookie('token', token).json('OK')
      } else {
        res.status(StatusCodes.UNAUTHORIZED).json('Senha inválida.')
      }
    }
  }
}
module.exports = { register, login }
