const express = require('express');
const {protect} = require("../middlewares/auth");
const {saveUserCart, savedUsersCart, clearUserCart} = require('../controllers/cartControllers');

const router = express.Router({mergeParams: true});

router.post('/save-cart', protect, saveUserCart);
router.get('/saved-cart', protect, savedUsersCart);
router.delete('/saved-cart', protect, clearUserCart);

module.exports = router;
