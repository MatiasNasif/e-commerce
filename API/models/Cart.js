const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Cart extends Model {}

Cart.init(
    {
        session_id: {
            type: DataTypes.INTEGER,
        },
    }
)