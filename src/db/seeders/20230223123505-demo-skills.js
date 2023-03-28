module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'skills',
      [
        {
          id: 1,
          title: 'Маркетинг',
        },
        {
          id: 2,
          title: 'Системный анализ',
        },
        {
          id: 3,
          title: 'UI/UX дизайн',
        },
        {
          id: 4,
          title: 'Менеджмент продукта',
        },
        {
          id: 5,
          title: 'PHP',
        },
        {
          id: 6,
          title: 'Английский',
        },
        {
          id: 7,
          title: 'Photoshop',
        },
        {
          id: 8,
          title: '1С',
        },
        {
          id: 9,
          title: 'WordPress',
        },
        {
          id: 10,
          title: 'React JS',
        },
        {
          id: 11,
          title: 'Бизнес-аналитика',
        },
        {
          id: 12,
          title: 'Продажи',
        },
        {
          id: 13,
          title: 'HR/Рекрутинг',
        },
        {
          id: 14,
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
