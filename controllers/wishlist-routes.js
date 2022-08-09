const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Wishlist } = require('../models');

router.get('/', (req, res) => {
    Wishlist.findAll()
        .then(dbWishlistData => console.log(dbWishlistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
        res.render('wishlist')
});

module.exports = router;
