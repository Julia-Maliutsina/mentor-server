module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users_skills',
      [
        {
          user_id: 2,
          skill_id: 5,
        },
        {
          user_id: 2,
          skill_id: 10,
        },
        {
          user_id: 2,
          skill_id: 14,
        },
        {
          user_id: 2,
          skill_id: 4,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users_skills', null, {});
  },
};
