const User = require('../models/UserModel')

const register = (req, res) => {
  res.status(200).json(req.body)
}
module.exports = { register }
