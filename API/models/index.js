const User = require("./User");
const Product = require("./Product");
const Category = require("./Category");
const Review = require("./Review");
const Payment = require("./Payment");
const Order = require("./Order");
// const User_order = require ("./User_order");

User.hasMany(Order);
Order.belongsTo(User);
Product.belongsToMany(Category, { through: "Category_Product" });
Category.belongsToMany(Category, { through: "Category_Product" });

module.exports = { User, Product, Category, Review, Payment, Order, User_order };