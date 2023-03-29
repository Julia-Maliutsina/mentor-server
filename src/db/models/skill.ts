import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const Skill = sequelize.define(
  'Skill',
  {
    title: DataTypes.STRING,
  },
  {
    tableName: 'skills',
    timestamps: true,
    underscored: true,
    updatedAt: false,
    paranoid: false,
  },
);

export default Skill;
