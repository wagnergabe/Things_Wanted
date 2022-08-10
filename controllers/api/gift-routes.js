const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Wishlist, User } = require('../../models');

router.get('/', (req,res) => {
    Wishlist.findAll({
        attributes: [
        'id',
        'wishlist_name',
        'event_name',
        'item_name',
        'category',
        'url'
        ]
    }

    )
    .then(dbWishlistData => res.json(dbWishlistData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})



module.exports = router;
