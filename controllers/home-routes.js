const router = require('express').Router();
const { User , Wishlist } = require('../models');
const sequelize = require('../config/connection')
const withAuth = require('../utils/auth');


router.get('/', withAuth,  (req, res) => {
  res.render('homepage', {
   loggedIn: req.session.loggedIn,
  })
})

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
