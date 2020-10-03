const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

class Login extends Model {}
Login.init(
  {
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
  }
);

module.exports = Login;
