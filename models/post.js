'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    frontcontent: DataTypes.STRING,
    maincontent: DataTypes.STRING,
    belowtitle: DataTypes.STRING,
    belowcontent: DataTypes.STRING,
    username: DataTypes.STRING,
    postimage: DataTypes.STRING,
    userimage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};