const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

class Price extends Model {}
Price.init(
  {
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
  }
);

module.exports = Price;
