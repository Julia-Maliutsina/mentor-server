module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users_languages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: false,
      },
      language_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'languages',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users_languages');
  },
};
