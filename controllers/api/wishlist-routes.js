const router = require('express').Router();
const sequelize = require('../../config/connection');
const  { Wishlist } = require('../../models');

router.get('/', (req, res) => {
    Wishlist.findAll()
      .then(dbWishlistData => res.json(dbWishlistData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

///may need "withAuth" middleware

router.post('/', (req, res) => {
  console.log("body is:", req.body)
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


router.get('/wishlist/:id', (req, res) => {
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
            'url',
            
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