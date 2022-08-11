const router = require('express').Router();
const sequelize = require('../../config/connection');
const  { Wishlist, User } = require('../../models');
const withAuth = require('../../utils/auth')


//create wishlist 


router.post('/', withAuth, (req, res) => {
    Wishlist.create({
        username: req.session.user_id,
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