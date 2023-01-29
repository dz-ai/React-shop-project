const mongoose = require('mongoose');

const Order = new mongoose.Schema({
   products: {
       type: Array,
       required: true,
   },
    total: {
      type: String,
    },
    shippingAddress: {
      type: Object,
      required: true,
    },
    status: {
       type: String,
        required: true,
        default: 'PAYED | waiting to pack',
    },
    createdAt: {
       type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Order', Order);