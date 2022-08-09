const router = require('express').Router();

const userRoutes = require('./user-routes');
const wishlistRoute = require('./wishlist-routes')


router.use('/users', userRoutes);
router.use('/wishlist', wishlistRoute);

module.exports = router;
