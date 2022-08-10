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

router.get('/:id', (req, res) => {
    Wishlist.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'wishlist_name',
            'event_name',
            'item_name',
            'category',
            'url',
        ],
    }).then(dbWishlistData => {
        if (!dbWishlistData) {
          res.status(404).json({ message: 'No gift found with this id' });
          return;
        }
        res.json(dbWishlistData)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.delete('/:id', (req, res) => {
    Wishlist.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbWishlistData => {
        if (dbWishlistData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbWishlistData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



module.exports = router;
