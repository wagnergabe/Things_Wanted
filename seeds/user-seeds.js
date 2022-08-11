const { User } = require("../models");

const usersData = [
  {
    username: "JohnDoe",
    email: "john@doe.com",
    password: "password123",
  },
  {
    username: "JaneDoe",
    email: "janeDoe@doe.com",
    password: "pasword456",
  }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;
