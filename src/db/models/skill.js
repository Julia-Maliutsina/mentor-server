'use strict';
const { Model } = require('sequelize');
const { Mentor } = require('./mentor');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skill.init(
    {
      title: DataTypes.STRING,
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Skill',
    },
  );
  /*   Skill.hasMany(Mentor, {
    foreignKey: 'id',
    as: 'mentors',
  }); */
  return Skill;
};
