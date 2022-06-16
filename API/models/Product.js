const { Op } = require("sequelize");
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");
class Product extends Model {
    static getAllWhereName(name) {
        return Product.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        })
    }
    // Filtra por categoria 1
    // static getAllWhereCategory(category) {
    //     return Product.findAll({
    //         where: {
    //             cat_uno: {
    //                 [Op.iLike]: `%${category}%`
    //             }
    //         }
    //     })
    // }

    static getAllWhereCategory(category) {
        return Product.findAll({
            where: {
                [Op.or]: [{ cat_uno:{[Op.iLike]: `%${category}%`} }, { cat_dos:{[Op.iLike]: `%${category}%`} }]
            }
        })
    }

    static getAllWhereDescription(description) {
        return Product.findAll({
            where: {
                description: {
                    [Op.iLike]: `%${description}%`
                }
            }
        })
    }
}

Product.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cat_uno: {
            type: DataTypes.STRING,
        },
        cat_dos: {
            type: DataTypes.STRING,
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
            type: DataTypes.TEXT,
            allowNull: false,
        },
        avgscore: {
            type: DataTypes.FLOAT,
        },
    },
    { sequelize, modelName: "product" }
);

module.exports = Product;