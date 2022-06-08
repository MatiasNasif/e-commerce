const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");


class Order_item extends Model {};

Order_item.init(
    {
        quantity: {
            type: DataTypes.INTEGER,
        },
    },
    { sequelize, modelName: "order_item" }
);

module.exports = Order_item;