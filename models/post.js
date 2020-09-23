const { Model } = require("sequelize");

class Post extends Model {}

Post.init({
  id: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    autoIncrement: true,
  },
  image: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  date: {
    timestamp: true,
  },
});
