import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('tmm_dev', 'dev', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});
