const express = require('express');
const {protect} = require("../middlewares/auth");
const {submitUserOrder} = require('../controllers/orderControllers');
const {pay} = require("../middlewares/payment");

const router = express.Router({mergeParams: true});

router.post('/submit-order', protect, pay, submitUserOrder);

module.exports = router;