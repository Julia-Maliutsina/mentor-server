module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'education',
      [
        {
          id: 1,
          organization: 'Академия BELHARD',
          specialization: 'Курсы JavaScript разработки',
          graduated_at: 2022,
          user_id: 1,
        },
        {
          id: 2,
          organization: 'МГУ им. Ломоносова',
          specialization: 'Фундаментальная информатика и информационные технологии',
          graduated_at: 2011,
          user_id: 2,
        },
        {
          id: 3,
          organization: 'IT Expert',
          specialization: 'Frontend разработка с использованием React JS',
          graduated_at: 2015,
          user_id: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('education', null, {});
  },
};
