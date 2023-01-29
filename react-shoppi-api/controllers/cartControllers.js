const Cart = require('../models/cartSchem');
const User = require('../models/userSchem');
const asyncHandler = require('../middlewares/asyncHandler');

exports.saveUserCart = asyncHandler(async (req, res, next) => {
    const userId = req.decodeUserId.id;
    //console.log(userId)
     await Cart.create(req.body)
        .then((cart) => {
            return User.findByIdAndUpdate(userId,
                {$push: {carts: cart._id}},
                { new: true, useFindAndModify: false }
            );
        });

     const user = await User.findById(userId).populate('carts');
     const carts = user.carts;

    res.json({cart: [], carts: carts});
});

exports.savedUsersCart = asyncHandler(async (req, res, next) => {
    const userId = req.decodeUserId.id;
    const user = await User.findById(userId).populate('carts');

    const allSavedCarts = user.carts
    //console.log(allSavedCarts)
    res.json({carts: allSavedCarts});
});

exports.clearUserCart = asyncHandler(async (req, res, next) => {
   //console.log(req.body.cartId)
    const cartId = req.body.cartId;
    const userId = req.decodeUserId.id;

    const user = await User.findById(userId);
    user.carts = user.carts.filter(cart => String(cart) !== String(cartId));
    await user.save();

    await Cart.findByIdAndDelete(cartId);

    const upDateUser = await User.findById(userId).populate('carts');
    console.log(upDateUser.carts)

    res.json({carts: upDateUser.carts});
});
