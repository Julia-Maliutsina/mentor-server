module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'mentors',
      [
        {
          id: 1,
          about:
            'Praesent tellus nisi, aliquet ac nulla sed, ultricies efficitur libero. Mauris venenatis dolor id varius mollis. Sed imperdiet ut leo eget mattis. Cras at erat orci. Integer eleifend semper scelerisque. Nulla congue sagittis maximus. Nunc mollis aliquam magna id pulvinar. Phasellus euismod lobortis mi, pellentesque egestas eros blandit ac. Vivamus eget quam varius, bibendum dui sit amet, fringilla libero. Donec volutpat ante nunc, sit amet aliquam nulla consectetur quis. Ut sit amet est at lacus auctor tempor. Nunc ut augue venenatis, dictum tortor in, hendrerit dolor. Donec eget tortor sed ex pellentesque mattis non ac neque.',
          experience: 4,
          price: 1500,
          last_seen_online: new Date('2023-02-21T17:30:00'),
          user_id: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mentors', null, {});
  },
};
