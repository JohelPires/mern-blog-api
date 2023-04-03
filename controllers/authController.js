const User = require('../models/UserModel')

const register = async (req, res) => {
  // const user = await User.create({...req.body})

  res.status(200).json(req.body)
}
module.exports = { register }
