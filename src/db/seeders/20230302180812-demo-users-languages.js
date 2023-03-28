module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users_languages',
      [
        {
          user_id: 1,
          language_id: 1,
        },
        {
          user_id: 1,
          language_id: 2,
        },
        {
          user_id: 2,
          language_id: 1,
        },
        {
          user_id: 2,
          language_id: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users_languages', null, {});
  },
};
