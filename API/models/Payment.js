const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");


class Payment extends Model {}

Payment.init(
    {
        amount: {
            type: DataTypes.FLOAT,
        },
        method: {
            type: DataTypes.STRING,
        }
    },
    { sequelize, modelName: "payment" }
);

module.exports = Payment;