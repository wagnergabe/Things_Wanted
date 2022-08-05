const { Wishlist } = require("../models");

const wishlistData = [
  {
    wishlist_name: "wishlist1",
    event: "Wedding",
    item_name: "Just Married Candle",
    category: "Home",
    url: "https://homesick.com/products/just-married-candle?nbt=nb%3Aadwords%3Ax%3A17872446205%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=122587519&nb_pc=online&nb_pi=shopify_US_6574624178238_39401399189566&nb_ppi=&nb_placement=&nb_si={sourceid}&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gclid=CjwKCAjw3K2XBhAzEiwAmmgrAtDufEOdThrQdys8ZwVuVpN6jvrv7E8z3jzlPzgGYV3e20OUsq6uKBoCsm0QAvD_BwE",
  },
];

const seedWishlist = () => Wishlist.bulkCreate(wishlistData);

module.exports = seedWishlist;
