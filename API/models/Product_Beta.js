const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");


class Product extends Model {}

Product.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cat_uno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cat_dos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        img_uno: {
            type: DataTypes.STRING,
        },
        img_dos: {
            type: DataTypes.STRING,
        },
        img_tres: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avgscore: {
            type: DataTypes.FLOAT,
        }
    },
    { sequelize, modelName: "product" }
);

module.exports = Product;