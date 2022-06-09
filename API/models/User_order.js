const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");


class User_order extends Model {}

User_order.init(
    {
        dni: {
            type: DataTypes.INTEGER,
        },
        phone: { // es necesario en esta tabla?
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
    { sequelize, modelName: "user_order" }
);

module.exports = User_order;

/// este modelo estaria simplificado en User por eso esta comentada, 
/// se controlarian los campos no requeridos desde el front controlando los inputs