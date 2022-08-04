const User = require('./User');
const Wish = require('./Wish');
const Comment = require('./Comment');

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

module.exports = { User, Wish, Comment };