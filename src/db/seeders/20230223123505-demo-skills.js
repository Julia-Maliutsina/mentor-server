module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'skills',
      [
        {
          title: 'Маркетинг',
        },
        {
          title: 'Системный анализ',
        },
        {
          title: 'UI/UX дизайн',
        },
        {
          title: 'Менеджмент продукта',
        },
        {
          title: 'PHP',
        },
        {
          title: 'Английский',
        },
        {
          title: 'Photoshop',
        },
        {
          title: '1С',
        },
        {
          title: 'WordPress',
        },
        {
          title: 'React JS',
        },
        {
          title: 'Бизнес-аналитика',
        },
        {
          title: 'Продажи',
        },
        {
          title: 'HR/Рекрутинг',
        },
        {
          title: 'SQL',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('skills', null, {});
  },
};
