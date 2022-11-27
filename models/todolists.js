'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todolists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todolists.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todolists',
  });
  return Todolists;
};