import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('tmm_dev_db', 'user', 'pass', {
  host: 'localhost',
  dialect: 'postgres',
});
