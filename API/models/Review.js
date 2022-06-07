const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");


class Review extends Model {}

Review.init(
    {
        comment: {
            type: DataTypes.STRING,
        },
        score: {
            type: DataTypes.INTEGER,
        }
    },
    { sequelize, modelName: "review" }
);

module.exports = Review;