import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const User = sequelize.define(
  'User',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    role: DataTypes.INTEGER,
    photo: {
      type: DataTypes.STRING,
      defaultValue: 'static/default_avatar.png',
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    email_verification_token: DataTypes.STRING,
    email_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    cookie: DataTypes.STRING,
    cookie_expires_at: DataTypes.DATE,
  },
  {
    tableName: 'users',
    timestamps: true,
    underscored: true,
    paranoid: false,
  },
);

export default User;
