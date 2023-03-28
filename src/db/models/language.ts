import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';
const Language = sequelize.define(
  'Language',
  {
    language: DataTypes.STRING,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: false,
    },
    tableName: 'languages',
  },
);
export default Language;