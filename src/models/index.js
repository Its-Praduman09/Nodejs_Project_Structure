const User = require('./user');

const initModels = async () => {
  await User.sync();
};

module.exports = { User, initModels };
