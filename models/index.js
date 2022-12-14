const User = require("./User");
const Wishlist = require("./Wishlist");
const Item = require ("./Item");

User.hasMany(Wishlist, {
    onDelete: 'CASCADE'
});

Wishlist.belongsTo(User, {
    onDelete: 'CASCADE'
})

// Wishlist.hasMany(Item, {
//     foreignKey: "wishlist_id",
//     onDelete: 'CASCADE'
// })

// Item.belongsTo(Wishlist, {
//     foreignKey: "wishlist_id",
//     onDelete: 'CASCADE'
// })

module.exports = { User, Wishlist };
