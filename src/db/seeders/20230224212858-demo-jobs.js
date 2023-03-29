module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'jobs',
      [
        {
          organization: 'Mauris',
          position: 'Стажёр',
          user_id: 1,
        },
        {
          organization: 'Consectetur',
          position: 'Tech lead, Senior Full-stack разработчик',
          user_id: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jobs', null, {});
  },
};
