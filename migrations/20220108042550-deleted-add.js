'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'deletedAt',
        {
          type: Sequelize.DATE
        }
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.removeColumn('Users', 'deletedAt'),
  ]);
  }
};
