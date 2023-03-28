import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const Schedule = sequelize.define(
  'Schedule',
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
    day: DataTypes.INTEGER,
    from: DataTypes.INTEGER,
    to: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'schedules',
  },
);

export default Schedule;
