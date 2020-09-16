const { Model } = require("sequelize");


class Admin extends Model {}

Admin.init({
  id: {
    type: sequelize.DataTypes.STRING,
    allowNull: False,
    autoIncrement: true,
  },
  name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },

});
