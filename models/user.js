const { Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");
class Admin extends Model {}

Admin.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type:
      {
        type = DataTypes.ENUM('user', 'admin'),
        defaultValue:"user",
        allowNull: false
      },
      is_admin: {
        type: DataTypes.VIRTUAL,
        get() {
          if (this.type == "admin") return true;
          else return false;
        },
      }, 
  },
  {
    sequelize: sequelize,
  }
);

module.exports = Admin;
