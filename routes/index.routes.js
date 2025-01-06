const AccountRouter = require("./Account.routes");
const ProductRouter = require("./Product.routes");
const CartRouter = require("./Cart.routes");
const CategoryRouter = require("./Category.routes");

const express = require("express");
const router = express.Router();

router.use("/products", ProductRouter);
router.use("/account", AccountRouter);
router.use("/cart", CartRouter);
router.use("/category", CategoryRouter);

module.exports = router;
