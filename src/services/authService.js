const bcrypt = require('bcryptjs');
const { User } = require('../models');

const registerUser = async (userData) => {
  const hashedPassword = bcrypt.hashSync(userData.password, 8);
  userData.password = hashedPassword;
  return await User.create(userData);
};

module.exports = { registerUser };
