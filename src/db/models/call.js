'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Call extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Call.init(
    {
      date: DataTypes.DATE,
      confirmed: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Call',
    },
  );
  return Call;
};
