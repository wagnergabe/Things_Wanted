const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Wishlist extends Model {}

Wishlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    wishlist_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    event_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'id'
        //foreignKey found in Index
      }
    }
    // This is what links the two models together, thats all this is here for, dont try to combine attributes in this page (like i did). Pick the attributes you want to combine in the controller/routes
    // table merge example in controllers/gift-routes.js
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'wishlist',
  }
);

module.exports = Wishlist;
