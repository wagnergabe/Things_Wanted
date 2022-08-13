// Routes for wishlist form
const router = require('express').Router();

  router.get('/wishlist',  (req, res) => {
    res.render('partials/wishlist')
  })
  