'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ContactInfo, {
        foreignKey: {
          name: 'user_id',
        },
      });
      this.hasMany(models.Comments, {
        foreignKey: {
          name: 'user_id',
        },
      });
      this.hasMany(models.Orders, {
        foreignKey: {
          name: 'user_id',
        },
      });
    }
  }
  Users.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
