module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'languages',
      [
        {
          language: 'Русский',
        },
        {
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
