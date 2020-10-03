const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

class College extends Model {}
College.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
  }
);

module.exports = College;
