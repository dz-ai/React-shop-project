exports.checkPay = (creditCard, total) => {
    const {cardTyp, cardNum, exDate, threeNum} = creditCard;
    return Math.random() > 0.5
}