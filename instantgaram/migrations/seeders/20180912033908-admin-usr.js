'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'admin@admin.com',
          password: 'secret'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'admin@admin.com',
          password: 'secret'
        }
      ],
      {}
    );
  }
};
