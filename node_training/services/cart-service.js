
"use strict";
const ecomDAL = require('../data/data-access-layer');

const addItem = function(req) {
    try {
        console.log('in service');
        console.log(req.body);
        return ecomDAL.addItem(req.body);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addItem: addItem
};