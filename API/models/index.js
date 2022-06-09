const User = require("./User");
const Product = require("./Product");
const Category = require("./Category");
const Review = require("./Review");
const Payment = require("./Payment");
const Order = require("./Order");
// const User_order = require ("./User_order");
const Cart = require("./Cart");

User.hasMany(Order);
Order.belongsTo(User);

Product.belongsToMany(Category, { through: "Category_Product" });
Category.belongsToMany(Product, { through: "Category_Product" });

Payment.belongsTo(Order);
Order.hasOne(Payment);

Product.belongsTo(Cart);
Cart.hasMany(Product);

Cart.belongsTo(User, { as: "session" });

module.exports = { User, Product, Category, Review, Payment, Order };