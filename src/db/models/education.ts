import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const Education = sequelize.define(
  'Education',
  {
    organization: DataTypes.STRING,
    specialization: DataTypes.STRING,
    graduated_at: DataTypes.INTEGER,
  },
  {
    tableName: 'education',
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

export default Education;
