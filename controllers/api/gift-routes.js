const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Wishlist, User } = require('../../models');

router.get('/', (req, res) => {
    Wishlist.findAll()
        .then(dbWishlistData => res.json(dbWishlistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;
