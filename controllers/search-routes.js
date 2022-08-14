const router = require("express").Router();
const sequelize = require("../config/connection");
const { Op } = require("sequelize");
const { User, Wishlist } = require("../models");

router.get("/user", (req, res) => {
  let matches = [];
  let username = req.query.username;
  if (username) {
    User.findAll({
      where: {
        username: {
          [Op.substring]: username,
        },
      },
    }).then((users) => {
      console.log(users);
      res.send(users);
    });
  }
});

router.get("/", (req, res) => {
  res.render("search");
});

module.exports = router;
