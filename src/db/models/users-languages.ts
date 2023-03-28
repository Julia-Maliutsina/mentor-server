import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const UserLanguage = sequelize.define(
  'UserLanguage',
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
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'users_languages',
  },
);

export default UserLanguage;
