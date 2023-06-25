const Sequelize = require("sequelize");

const sequelize = new Sequelize("booking", "root", "localhost", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
