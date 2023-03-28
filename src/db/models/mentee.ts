import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const Mentee = sequelize.define(
  'Mentee',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    about: DataTypes.TEXT,
    last_seen_online: DataTypes.DATE,
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'mentees',
  },
);

export default Mentee;
