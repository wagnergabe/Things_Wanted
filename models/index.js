const User = require("./User");
const Wishlist = require("./Wishlist");

User.hasMany(Wishlist, {
    foreignKey: 'user_list',
    onDelete: 'CASCADE'
});

Wishlist.belongsTo(User, {
    foreignKey: 'user_list',
    onDelete: 'CASCADE'
})

module.exports = { User, Wishlist };
