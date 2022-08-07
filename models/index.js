const Users = require("./Users");
const Wishlist = require("./Wishlist");

Users.hasMany(Wishlist, {
    foreignKey: 'user_list',
    onDelete: 'CASCADE'
});

Wishlist.belongsTo(Users, {
    foreignKey: 'user_list',
    onDelete: 'CASCADE'
})

module.exports = { Users, Wishlist };
