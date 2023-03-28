import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const Job = sequelize.define(
  'Job',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    organization: DataTypes.STRING,
    position: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'jobs',
    //@ts-ignore
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);
export default Job;
