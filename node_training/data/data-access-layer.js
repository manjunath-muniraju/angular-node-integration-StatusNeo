const DB = require('node-json-db');
const JsonDBConfig = require('../node_modules/node-json-db/dist/lib/JsonDBConfig');

// set db
var db = new DB.JsonDB(new JsonDBConfig.Config("ecommDB", true, false, '/'));
const shortid = require('shortid');
//squenceNo = 0;

const addItem = function(cartData) {
    try {
        console.log('inside dal');
        console.log(JSON.stringify(cartData));
        let id = shortid.generate();

        // prepare user object
        let cartItem = { id: id, item: cartData.name};
        db.push("/items[]", cartItem, true);
        //return { id: cartItem.id };
        return cartItem;
    } catch (err) {
        console.log(`error -> ${err}`);
        throw err
    }
}

module.exports = {
    addItem: addItem,
};