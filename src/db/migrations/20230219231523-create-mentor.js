'use strict';
/** @type {import('sequelize-cli').Migration; import { JobDataType } from '../types/job'} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mentors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      about: {
        type: Sequelize.TEXT,
      },
      experience: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      last_seen_online: {
        type: Sequelize.DATE,
      },
      current_job: {
        type: Sequelize.JSON,
      },
      jobs: {
        type: Sequelize.JSON,
      },
      education: {
        type: Sequelize.JSON,
      },
      availability: {
        type: Sequelize.JSON,
      },
      skills: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mentors');
  },
};
