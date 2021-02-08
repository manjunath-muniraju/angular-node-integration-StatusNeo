"use strict";

const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cart-controller');

cartRouter.post("/cart/item", (req, res) => {
    console.log('Inside router');
    cartController.addItem(req, res);
});

module.exports.cartRouter = cartRouter;