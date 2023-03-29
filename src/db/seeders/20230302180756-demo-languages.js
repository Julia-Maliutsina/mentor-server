module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'languages',
      [
        {
          id: 1,
          language: 'Русский',
        },
        {
          id: 2,
          language: 'English',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('languages', null, {});
  },
};
