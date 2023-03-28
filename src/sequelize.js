import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('railway', 'postgres', '1sm1RuPDb4af2eOcFK8B', {
  host: 'containers-us-west-49.railway.app',
  dialect: 'postgres',
  port: 5881,
});
