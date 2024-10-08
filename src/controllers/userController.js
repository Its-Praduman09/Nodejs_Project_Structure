const { User } = require('../models');

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

module.exports = { getAllUsers };
