const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

class Course extends Model {}
Course.init(
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
  }
);

module.exports = Course;
