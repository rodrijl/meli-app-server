const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    author: {
        name: String,
        lastname: String
    },
    item: {
        id: String,
        title: String,
        price: {
            currency: String,
            amount: Number,
            decimals: Number
        },
        categories: Array,
        picture: String,
        condition: String,
        free_shipping: Boolean,
        sold_quantity: Number,
        city: String,
        description: { type: String, max: 1200 }
    }
});

module.exports = mongoose.model('Product', ProductSchema);