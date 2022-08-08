const router = require('express').Router();
const { Users , Wishlist } = require('../models');
const withAuth = require('../utils/auth');

var express = require('express');
var bodyParser = require ('body-parser');
const { Post } = require('../../../../../Downloads/14.5/models');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/',  (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
  })
})

// Routes for wishlist

router.get("/wishlist", function (req, res) {
  res.render("partials/wishlist", {qs: req.query});
});

router.post("/wishlist", urlencodedParser, function (req, res) {
Post.create({
  wishlist_name: req.body.wishlist_name,
  event: req.body.event,
  item_name: req.body.item_name,
  category: req.body.category,
  url: req.body.url
})
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
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
