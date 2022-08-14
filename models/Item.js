// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");
// const Wishlist = require("./Wishlist");

// class Item extends Model {}

// Item.init( 
//     {
//     id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true
//     },
//     itemTitle: {
//         type: DataTypes.STRING,
//         allowNull: false 
//     },
//     url: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     category: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     wishlist_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'wishlist',
//             key: 'id'
//         }
//     } 
//     },
//     {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'item',
// });
// module.exports = Item;
