const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Wishlist} = require('../models');
const withAuth = require('../utils/auth');

router.get("/", (req , res) => {
    Wishlist.findAll()
    .then(dbWishlistData => res.json(dbWishlistData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
    res.render("gifts")
})


module.exports = router;