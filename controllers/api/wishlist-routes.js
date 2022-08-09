const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Wishlist } = require('../../models');

router.get('/', (req, res) => {
    Wishlist.findAll()
        .then(dbWishlistData => res.json(dbWishlistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
//may need "withAuth" middleware
router.post('/', (req,res) => {
    Wishlist.create({
        wishlist_name: req.body.wishlist_name,
        event: req.body.event,
        item_name: req.body.item_name,
        category: req.body.category,
        url: req.body.url
    })
        .then(dbWishlistData => res.json(dbWishlistData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

// Routes for wishlist

router.get("/wishlist", function (req, res) {
    res.render("wishlist", {qs: req.query});
  });
  

  
module.exports = router;