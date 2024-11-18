const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true, 'item name is required']
    },
    food_group: {
        type: String,
        required: [true, 'food_group is required'],
        enum: ['fruits', 'dairy', 'proteins', 'vegetrables', 'nuts', 'grains']
    },
    price_in_usd: {
        type: Number,
        required: [true, 'Please enter a number for price in USD']
    },
})
module.exports = mongoose.model('GroceryItem', grocerySchema)