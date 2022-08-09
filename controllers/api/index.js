const router = require('express').Router();

const userRoutes = require('./user-routes');
const wishlistRoute = require('./wishlist-routes');
const giftRoutes = require('./gift-routes');


router.use('/users', userRoutes);
router.use('/wishlist', wishlistRoute);
router.use('./gifts', giftRoutes);

module.exports = router;
