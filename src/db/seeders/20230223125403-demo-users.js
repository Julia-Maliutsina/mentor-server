module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'user_mail@gmail.com',
          password: '$2a$08$q.Jhkc3t/hw.USzCGIuWiO46vC6exSBof1IdSupIKlacr3stx0.qC',
          name: 'Егор',
          last_name: 'Семёнов',
          email_verified: true,
          role: 2,
        },
        {
          email: 'testUser1990@gmail.com',
          password: '$2a$08$p55wxueEzngjg08DGYWhb.BSm/.YX4uHjsQrLppbse69i4Lx9fQTu',
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
