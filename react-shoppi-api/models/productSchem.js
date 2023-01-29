const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    products: {
        id: Number,
        title: String,
        price: Number,
        description: String,
        category: String,
        image: String,
        rating: { rate: Number, count: Number}
    },

});


module.exports = mongoose.model('Product', Product);