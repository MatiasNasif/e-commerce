const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");


class Order extends Model {}

Order.init(
    {
        total: {
            type: DataTypes.FLOAT,
        }
    },
    { sequelize, modelName: "order" }
);

module.exports = Order;