const router = require('express').Router();
const { Users , Wishlist } = require('../models');
const withAuth = require('../utils/auth');



router.get('/',  (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
  })
})

// Routes for wishlist

router.get("/wishlist", function (req, res) {
  res.render("partials/wishlist");
});


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
