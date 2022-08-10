const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const wishlistRoutes = require('./wishlist-routes');
const giftRoutes = require('./gift-routes');


// router.use('/users', userRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('./gifts', giftRoutes);

module.exports = router;

