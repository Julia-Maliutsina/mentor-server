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
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'calls',
  },
);

export default Call;
