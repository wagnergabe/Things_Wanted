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

//get single gift

router.get('/gifts/:id', (req, res) => {
    Wishlist.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'wishlist_name',
            'event',
            'item_name',
            'category',
            'url'
        ],
    }).then(dbWishlistData => {
        if (!dbWishlistData) {
          res.status(404).json({ message: 'No gift found with this id' });
          return;
        }
  
        const wishlist = dbPostData.get({ plain: true });
  
        res.render('single-post', {
          wishlist,
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;