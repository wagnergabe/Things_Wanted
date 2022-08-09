
const seedUsers = require("./user-seeds");
const seedWishes = require("./wish-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");

  await seedUsers();
  console.log("--------------");

  await seedWishes();
  console.log("--------------");

  process.exit(0);
};

seedAll();
