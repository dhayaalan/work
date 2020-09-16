const { Sequelize } = require("sequelize");

const seq = new Sequelize("user","root","", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = seq;
