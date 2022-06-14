const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");
const bcrypt = require("bcrypt");


class User extends Model {
    hash(password, salt) {
        return bcrypt.hash(password, salt);
    }
}

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salt: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        dni: { // dato a manejar por el front
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        phone: { // dato a manejar por el front
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        address: { // dato a manejar por el front
            type: DataTypes.STRING,
            allowNull: true,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    { sequelize, modelName: "user" }
);

User.beforeCreate((user) => {
    return bcrypt
    .genSalt(16)
    .then((salt) => {
        user.salt = salt;
        return user.hash(user.password, salt);
    })
    .then((hash) => user.password = hash);
});

module.exports = User;