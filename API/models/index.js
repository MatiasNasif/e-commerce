const User = require("./User");
const Product = require("./Product");
const Review = require("./Review");
const Payment = require("./Payment");
const Order = require("./Order");
const Cart = require("./Cart");
const Cart_item = require("./Cart_item");

User.hasMany(Order);
Order.belongsTo(User);

Payment.belongsTo(Order);
Order.hasOne(Payment);

Cart.belongsToMany(Product, { through: "cart_items" });
Product.belongsToMany(Cart, { through: "cart_items" })

Cart.belongsTo(User, { as: "session" });

module.exports = { User, Product, Review, Payment, Order, Cart, Cart_item };