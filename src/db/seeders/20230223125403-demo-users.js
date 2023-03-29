module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          email: 'user_mail@gmail.com',
          password: '$2a$08$5jmIzN3l.jieUhbb9E0z4OYu.uvA7k/2Z.D.rgDO8nEBtK5wPVsie',
          name: 'Егор',
          last_name: 'Семёнов',
          email_verified: true,
          role: 2,
        },
        {
          id: 2,
          email: 'testUser1990@gmail.com',
          password: '$2a$08$5jmIzN3l.jieUhbb9E0z4OYu.uvA7k/2Z.D.rgDO8nEBtK5wPVsie',
          name: 'Иван',
          last_name: 'Иванов',
          email_verified: true,
          role: 3,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
