const app = require('./app');
const { initModels } = require('./models');
const dotenv = require('./config/dotenv');

const port = process.env.PORT || 3000;

const startServer = async () => {
  await initModels();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
