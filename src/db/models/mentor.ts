import { DataTypes } from 'sequelize';

import { sequelize } from '../../sequelize.js';

const Mentor = sequelize.define(
  'Mentor',
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
    about: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    last_seen_online: DataTypes.DATE,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    tableName: 'mentors',
  },
);

export default Mentor;
