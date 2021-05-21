const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

class Collage extends Model {}
Collage.init(
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

module.exports = Collage;
