const router = require('express').Router();
const sequelize = require('../../config/connection');
const  { Wishlist } = require('../../models');

//create wishlist 
///may need "withAuth" middleware

router.post('/', (req, res) => {
    Wishlist.create({

        wishlist_name: req.body.wishlist_name,
        event_name: req.body.event_name,
        item_name: req.body.item_name,
        category: req.body.category,
        url: req.body.url
    })
        .then(dbWishlistData => res.json(dbWishlistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});




module.exports = router;