const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Wishlist } = require('../models');

router.get('/', (req, res) => {
    res.render('wishlist')
});

module.exports = router;
