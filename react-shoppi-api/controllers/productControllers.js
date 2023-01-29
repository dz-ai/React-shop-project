const asyncHandler = require('../middlewares/asyncHandler');
const Product = require('../models/productSchem');
// const fetch = (...args) =>
//     import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.fetchProducts = asyncHandler( async (req, res) => {

   const products = await Product.find({});

   res.json(products);

});