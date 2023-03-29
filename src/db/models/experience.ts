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
    timestamps: true,
    underscored: true,
    paranoid: false,
  },
);

export default Experience;
