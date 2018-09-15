const Sequelize = require('sequelize');
const sequelize = require('../squalize');
const Todo = sequelize.define('serverto', {
  todo: {
    type: Sequelize.STRING
  },
  isDone: {
    type: Sequelize.BOOLEAN
  }
});

module.exports = Todo;
