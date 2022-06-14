const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");


class Cart_item extends Model {}

Cart_item.init(
    {
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        }
    }, { sequelize, modelName: "cart_items" }
)

module.exports = Cart_item;