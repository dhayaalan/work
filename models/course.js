const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

class Course extends Model {}
Course.init(
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

module.exports = Course;
