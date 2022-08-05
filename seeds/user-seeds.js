const { Users } = require("../models");

const usersData = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "john@doe.com",
    password: "password123",
  },
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;
