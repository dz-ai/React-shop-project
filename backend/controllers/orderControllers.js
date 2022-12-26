const Order = require('../models/ordersSchem');
const User = require('../models/userSchem');
const asyncHandler = require('../middlewares/asyncHandler');

exports.submitUserOrder = asyncHandler(async (req, res, next) => {

    if (req.pay) {
        const order = await Order.create(req.body)
            .then((order) => {
                return User.findByIdAndUpdate(req.decodeUserId.id ,
                    {$push: {orders: order._id}},
                    { new: true, useFindAndModify: false },
                );
            })
            .then(order => res.json({orderId: order._id, message: 'Your order was successfully received'}));
    }
});
