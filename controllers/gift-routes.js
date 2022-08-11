const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Wishlist} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Wishlist.findAll({
      attributes: [
        'id',
        'wishlist_name',
        'event_name',
        'item_name',
        "category",
        "url",
      ],
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('gifts', {posts} );
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//get single gift//

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

  router.get('/edit/:id', withAuth, (req, res) => {
    Wishlist.findByPk(req.params.id, {
      attributes: [
        'id',
        'wishlist_name',
        'event_name',
        'item_name',
        'category',
        'url'
      ]
    }).then (dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-gift', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
  

module.exports = router;