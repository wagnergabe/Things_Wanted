const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(
  process.env.DB_NAME || wishlist_db,
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "test",
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
