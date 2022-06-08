const Sequelize = require("sequelize");

const db = new Sequelize("goodvibes", null, null, {
    dialect: "postgres",
    host: "localhost",
    logging: false
});

module.exports = db;