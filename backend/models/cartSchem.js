const mongoose = require('mongoose');

const Cart = new mongoose.Schema({
   cart: {
       type: Object,
   },
   createdAt: {
       type: Date,
       default: Date.now(),
   }
});

module.exports = mongoose.model('Cart', Cart);