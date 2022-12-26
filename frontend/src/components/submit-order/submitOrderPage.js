import './submitOrderPageStyle.css'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCartActions} from "../../store/features/cartSlice/actionsIndex";

function SubmitOrder() {
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const {orderZero, setTotalPrice, cartCounter, submitOrder} = useCartActions();

    const [cardType, setCardType] = useState('visa');
    const [cardNum, setCardNum] = useState('');
    const [exDate, setExDate] = useState('');
    const [threeNum, setThreeNum] = useState('');
    const [message, setMessage] = useState(false);

    const validCard = {
        cardNum: /^\d{16}$/.test(cardNum),
        exDate: /^\d{4}$/.test(exDate),
        threeNum: /^\d{3}$/.test(threeNum),
    }
    const handelSubmit = () => {
        if (validCard.cardNum && validCard.exDate && validCard.threeNum) {
            submitOrder({products: cart.cart, total: cart.total, creditCard:{cardType, cardNum, exDate, threeNum}});
        } else {
            setMessage(true)
        }
    };

    const handelContinueShopping = () => {
      orderZero('all');
      navigate('/');
    };

    useEffect(() => {
        setTotalPrice();
        cartCounter();
    }, [cart.cart]);

    return (
        <>
            {cart.orderId === 0 && <div className="container container-window">

                {message && <p className="message">please check to fill in the credit card fields correctly</p>}
                {cart.message && <p className="message">{cart.message}</p>}

                <p>{user.username}: You have {cart.itemsCount} {cart.itemsCount > 1 ? 'items' : 'item'} in cart</p>
                <p>Total: {cart.total.toFixed(2)} $</p>

                <div className="payment-field card-type-select container">
                    <label>credit card: </label>
                    <select value={cardType} onChange={(event) => setCardType(event.target.value)}>
                        <option value="visa">visa</option>
                        <option value="master-card">master-card</option>
                        <option value="american-express">american-express</option>
                    </select>
                </div>

                <div className="container payment-fields">
                    <div className="payment-field container">
                        <label>Card Number:</label>
                        <input value={cardNum} onChange={(event) => setCardNum(event.target.value)}
                               placeholder="card number"/>
                    </div>

                    <div className="payment-field container">
                        <label>Expire Date:</label>
                        <input value={exDate} onChange={(event) => setExDate(event.target.value)} placeholder="date"/>
                    </div>

                    <div className="payment-field container">
                        <label>3 Numbers:</label>
                        <input value={threeNum} onChange={(event) => setThreeNum(event.target.value)}
                               placeholder="3 numbers on back card"/>
                    </div>

                </div>

                <button className="button"
                        onClick={handelSubmit}
                        disabled={cart.cart.length === 0}>
                    Buy New
                </button>
            </div>
            }

            {cart.orderId !== 0 &&
                <div className="container container-window">
                    <p>{cart.message}</p>
                    <p>order num: {cart.orderId}</p>
                    <button className="button"
                            onClick={handelContinueShopping}>
                            to continue shopping...
                    </button>
                </div>
            }
        </>
    );
}

export default SubmitOrder;