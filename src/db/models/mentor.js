'use strict';
const { Model } = require('sequelize');
const { Skill } = require('./skill');
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mentor.init(
    {
      about: DataTypes.STRING,
      experience: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      last_seen_online: DataTypes.DATE,
      current_job: DataTypes.JSON,
      jobs: DataTypes.JSON,
      education: DataTypes.JSON,
      availability: DataTypes.JSON,
      skills: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: 'Mentor',
    },
  );

  /*   Mentor.belongsToMany(Skill, {
    foreignKey: 'skills',
    as: 'skills',
  }); */
  return Mentor;
};
