const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");


class Category extends Model {}

Category.init(
    {
        name: {
            type: DataTypes.STRING,
        }
    },
    { sequelize, modelName: "category" }
);

module.exports = Category;