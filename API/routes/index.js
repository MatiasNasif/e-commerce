const express = require("express")
const router = express.Router()

const usersRouter = require("./users")
const productsRouter = require("./products")
const cart_itemsRouter = require("./cart_items")
const cartsRouter = require("./carts")

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/items", cart_itemsRouter);
router.use("/carts", cartsRouter);

module.exports = router