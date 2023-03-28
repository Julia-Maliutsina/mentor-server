import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const Skill = sequelize.define(
  'Skill',
  {
    title: DataTypes.STRING,
  },
  {
    tableName: 'skills',
    //@ts-ignore
    timestamps: {
      createdAt: 'created_at',
      updatedAt: false,
    },
  },
);

export default Skill;
