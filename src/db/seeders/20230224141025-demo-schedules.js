module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'schedules',
      [
        {
          id: 1,
          day: 1,
          from: 900,
          to: 1200,
          user_id: 2,
        },
        {
          id: 2,
          day: 3,
          from: 1800,
          to: 2100,
          user_id: 2,
        },
        {
          id: 3,
          day: 4,
          from: 900,
          to: 1200,
          user_id: 2,
        },
        {
          id: 4,
          day: 5,
          from: 1800,
          to: 2100,
          user_id: 2,
        },
        {
          id: 5,
          day: 7,
          from: 1100,
          to: 1400,
          user_id: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('schedules', null, {});
  },
};
