const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");


class Product extends Model {}

Product.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false, // NECESARIO??
        },
        SKU: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0, // ????
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        avgscore: {
            type: DataTypes.FLOAT,
        },
        img: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
        }
    },
    { sequelize, modelName: "product" }
);

module.exports = Product;