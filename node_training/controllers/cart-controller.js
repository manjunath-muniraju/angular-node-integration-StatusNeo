"use strict";

const cartService = require('../services/cart-service');
const HTTPSTATUSCODE = require('../constant/app-const');

const addItem = function(req, res) {
    try {
        console.log('Inside cart controller');
console.log(req.body);
        let newItem = cartService.addItem(req);
        return res.status(HTTPSTATUSCODE.CREATED).json(newItem);
    } catch (err) {
        res.status(HTTPSTATUSCODE.INTERNALSERVERERROR).json({ error: err.toString() });
    }
}

module.exports = {
    addItem: addItem
};