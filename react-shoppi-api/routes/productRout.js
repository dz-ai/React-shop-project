const express = require('express');
const {fetchProducts} = require("../controllers/productControllers");

const router = express.Router({mergeParams: true});

router.get('/fetch-products', fetchProducts);

module.exports = router;