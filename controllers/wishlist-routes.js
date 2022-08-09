const router = require('express').Router();
const sequelize = require('../config/connection');
const { Users, Wishlist } = require('../models');

router.get('/', (req, res) => {
    console.log ('Now entering Wishlist Creater')
res.render('wishlist')
})


module.exports = router;
