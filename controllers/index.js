const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const wishlistRoutes = require('./wishlist-routes.js')
const giftRoutes = require('./gift-routes.js');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use ('/wishlist', wishlistRoutes);
router.use('/gifts', giftRoutes)

module.exports = router;