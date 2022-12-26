const asyncHandler = require('../middlewares/asyncHandler');
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.fetchProducts = asyncHandler( (req, res) => {
    fetch(  "https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(response => res.json(response))
        .catch(console.log);
});