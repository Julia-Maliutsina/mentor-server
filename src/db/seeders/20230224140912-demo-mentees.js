module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'mentees',
      [
        {
          id: 1,
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum ante mollis turpis maximus, non congue mi tincidunt. Etiam arcu nisl, maximus quis feugiat id, pulvinar at felis. Fusce fermentum magna non risus ornare, id mattis nisl tempor. Suspendisse pharetra risus nisl, eu laoreet sem congue in. Etiam sed erat non leo accumsan consequat ac ac libero. Aenean a congue urna. Aliquam eu sollicitudin elit, vel aliquet odio. Donec dapibus nibh at sodales rutrum. Fusce ornare nisi at auctor fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris non rutrum est, tempus tincidunt eros.',
          last_seen_online: new Date('2023-02-19T18:30:00'),
          user_id: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mentees', null, {});
  },
};
