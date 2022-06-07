const Sequelize = require("sequelize");

const sequelize = new Sequelize("goodvibes", null, null, {
    dialect: "postgres",
    host: "localhost",
    logging: false
});

module.exports = sequelize;