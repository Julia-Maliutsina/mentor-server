import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const Call = sequelize.define(
  'Call',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    date: DataTypes.DATE,
    confirmed: DataTypes.BOOLEAN,
    mentor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mentee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
  },
  {
    tableName: 'calls',
  },
);

export default Call;
