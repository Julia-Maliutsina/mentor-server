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
  },
  {
    timestamps: true,
    underscored: true,
    paranoid: false,
    tableName: 'mentees',
  },
);

export default Mentee;
