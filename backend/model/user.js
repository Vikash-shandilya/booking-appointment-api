const Sequelize = require("sequelize");
const sequelize = require("../data/database");

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING, // Updated the data type to STRING
});

module.exports = User;
