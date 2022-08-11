const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Wishlist, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Wishlist.findAll({
      attributes: [
        'id',
        'wishlist_name',
        'event_name',
        'item_name',
        'category',
        'url',
      ],
      include: [{
        model: User,
        attributes: ['username']
    }]
    })
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

router.put('/:id', withAuth, (req, res) => {
  Wishlist.update(
    {
        wishlist_name: req.body.wishlist_name,
        event_name: req.body.event_name,
        item_name: req.body.item_name,
        category: req.body.category,
        url: req.body.url
    },
    {
        where: {
            id: req.params.id,
        },
    }).then ((dbWishlistData) => res.json(dbWishlistData))
       .catch((err) => {
        console.log(err);
        res.status(500).json(err)
       })
    });

router.delete('/:id', withAuth, (req, res) => {
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
