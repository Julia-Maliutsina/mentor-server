import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';
const Language = sequelize.define(
  'Language',
  {
    language: DataTypes.STRING,
  },
  {
    timestamps: true,
    underscored: true,
    updatedAt: false,
    paranoid: false,
    tableName: 'languages',
  },
);
export default Language;
