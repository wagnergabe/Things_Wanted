const Users = require("./Users");
const Wishlist = require("./Wishlist");

// User.hasMany(Wish, {
//     foreignKey: 'user_list',
//     onDelete: 'CASCADE'
// })

// User.hasMany(Comment, {
//     foreignKey: "user_list",
//     onDelete: 'CASCADE'
// })

// Comment.belongsTo(User, {
//     foreignKey: "user_list",
//     onDelete: 'CASCADE'
// })

// Wish.belongsTo(User, {
//     foreignKey: 'user_list',
//     onDelete: 'CASCADE'
// })

module.exports = { Users, Wishlist };
