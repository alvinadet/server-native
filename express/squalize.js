const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/todos');
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connet!.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
