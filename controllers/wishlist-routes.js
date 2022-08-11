const router = require('express').Router();
const sequelize = require('../config/connection');
const { Wishlist } = require('../models');
const withAuth = require('../utils/auth')
router.get('/', withAuth, (req, res) => {
    res.render('wishlist', {loggedIn: true })
});

module.exports = router;
