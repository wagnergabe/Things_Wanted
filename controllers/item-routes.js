const router = require('express').Router();
const { Item , Wishlist, User } = require('../models');
const sequelize = require('../config/connection')
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    res.render('wishlist', {loggedIn: true})
})

module.exports = router;