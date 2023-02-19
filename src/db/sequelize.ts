import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tmm_dev', 'postgres', 'fed196cba', {
  host: 'localhost',
  port: 5000,
  dialect: 'postgres',
});

export default sequelize;
