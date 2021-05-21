const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

class Login extends Model {}
Login.init(
  {
    emailId: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
  }
);

module.exports = Login;
