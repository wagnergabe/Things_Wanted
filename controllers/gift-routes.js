const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Wishlist} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Wishlist.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'wishlist_name',
        'event_name',
        'item_name',
        "category",
        "url",
      ],
      indlude: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('gifts', {posts, loggedIn: true} );
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//get single gift

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

module.exports = router;