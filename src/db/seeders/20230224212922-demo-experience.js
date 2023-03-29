module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'experience',
      [
        {
          organization: 'Gravida Coffee',
          position: 'Бариста',
          from: new Date('2021-04-10'),
          to: new Date('2022-07-17'),
          user_id: 1,
        },
        {
          organization: 'Prodamus',
          position: 'PHP разработчик',
          from: new Date('2011-12-08'),
          to: new Date('2014-03-14'),
          user_id: 2,
        },
        {
          organization: 'Consectetur',
          position: 'PHP разработчик',
          from: new Date('2014-04-12'),
          to: new Date('2015-05-03'),
          user_id: 2,
        },
        {
          organization: 'Consectetur',
          position: 'Middle Full-stack разработчик',
          from: new Date('2016-01-01'),
          to: new Date('2019-02-30'),
          user_id: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('experience', null, {});
  },
};
