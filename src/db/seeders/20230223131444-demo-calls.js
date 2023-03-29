module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'calls',
      [
        {
          date: new Date('2023-05-17T09:24:00'),
          confirmed: true,
          mentor_id: 1,
          mentee_id: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('calls', null, {});
  },
};
