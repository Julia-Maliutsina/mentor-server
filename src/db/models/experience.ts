import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const Experience = sequelize.define(
  'Experience',
  {
    organization: DataTypes.STRING,
    position: DataTypes.STRING,
    from: DataTypes.DATE,
    to: DataTypes.DATE,
  },
  {
    tableName: 'experience',
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

export default Experience;
