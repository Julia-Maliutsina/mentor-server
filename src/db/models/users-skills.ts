import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const UserSkill = sequelize.define(
  'UserSkill',
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
      references: 'User',
      referencesKey: 'id',
    },
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'Skill',
      referencesKey: 'id',
    },
  },
  {
    timestamps: false,
    tableName: 'users_skills',
  },
);

export default UserSkill;
