const asyncHandler = require('./asyncHandler');
const {checkPay} = require("../utils/checkPay");

exports.pay = asyncHandler(async (req, res, next) => {
   const {total, creditCard} = req.body;

   if (total === 0) {
      return next(new Error('your total order is 0'));
   }

   const isCardValid = checkPay(creditCard);

   if (!isCardValid) {
      return next(new Error('the credit company gives no permission'));
   } else {
      req.pay = true;
      delete req.body.creditCard;
      next();
   }
});

