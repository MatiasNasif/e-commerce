const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Cart extends Model {}

Cart.init(
    {
        // session_id: {
        //     type: DataTypes.INTEGER,
        // },                           esto se crearia automaticamente al hacer la relacion con user
        quantity: {
            type: DataTypes.INTEGER,
        }
    },
    { sequelize, modelName: "cart" }
)

module.exports = Cart;