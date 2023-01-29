import './cartStyles/cartStyle.css';
import CartItem from "./cart-item";
import {GrClose} from "react-icons/gr";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import SavedCartMenu from "./savedCartMenu";
import {useCartActions} from "../../store/features/cartSlice/actionsIndex";
import {MdOutlineShoppingCart} from "react-icons/md";
import {useOutClick} from "../../Utils-and-Hooks/useOutClick";

function Cart({cartItems, total, handleCartButton}) {
    const products = useSelector(state => state.products.products);
    const isUserLog = useSelector(state => state.user.isLog);
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();
    // actions
    const {getSavedCart, saveCart, fetchSavedCart, clearSavedCart, showCartFun} = useCartActions();

    const [showSavedCarts, setShowSavedCarts] = useState(false);
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [removeEventListener, setRemoveEventListener] = useState(false);

    const ref = useRef(null);

    useOutClick(ref, removeEventListener,  showCartFun, null);

    const handelSaveCart = () => {
        if (isUserLog) {
            saveCart({cart: cart.cart});
            fetchSavedCart();
        } else {
            setMessage('please login first');
            setShowMessage(true);
        }
    };

    const handleSavedCartClick = (cartId) => {
        if (cart.cart.length === 0) {
            clearSavedCart(cartId);
            getSavedCart(cartId);
            setShowSavedCarts(false);
        } else {
            setMessage('please save current cart before fetch saved cart');
            setShowMessage(true);
        }
    };

    const handleClearSavedCart = (cartId) => {
        clearSavedCart(cartId);
    };

    const handelSubmit = () => {
        if (isUserLog) {
            navigate('/submit')
            showCartFun();
        } else {
            navigate('/login', {state: {name: 'Sign-in', id: '1'}});
            showCartFun();
        }
    };

    return (
        <div ref={ref}>

            <button onClick={handleCartButton}
                    className="icon-button cart-toggle">
                {cart.cart.length > 0 && <div className="cart-counter round">{cart.itemsCount}</div>}
                <MdOutlineShoppingCart/>
            </button>

        {
            cart.showCart && cart.cart.length > 0
            ||
            cart.showCart && cart.savedCarts.length > 0
                ?
        <div className="container cart-wrapper">

            <header className="cart-header container">
                <h3>Cart</h3>

                <div className="container cart-header-buttons-wrapper">

                    <button className="cart-header-buttons button"
                            onClick={handelSaveCart}
                            disabled={showSavedCarts}>
                        save cart
                    </button>

                    <button className="cart-header-buttons button"
                            onClick={() => setShowSavedCarts(!showSavedCarts)}>
                        {showSavedCarts ? 'current cart' : 'saved cart'}
                    </button>
                </div>

                <button className="icon-button" onClick={() => showCartFun()}>
                    <GrClose/>
                </button>
            </header>

            {!showSavedCarts &&
                <div className="cart-list">
                    {
                      cartItems.map(item =>
                          item.quantity > 0 ?
                        <CartItem
                            key={item.id}
                            item={item}
                            cartItem={products.find(product => product.id === item.id)}
                            setRemoveEventListener={setRemoveEventListener}
                        />
                              :
                              null
                      )
                    }
            </div>}

            {showSavedCarts && <div className="cart-list">
                <SavedCartMenu
                    savedCarts={cart.savedCarts}
                    handleSavedCartClick={handleSavedCartClick}
                    handleClearSavedCart={handleClearSavedCart}
                />
            </div>}

            <footer className="total container">
                Total: {total.toFixed(2)} $
                <button className="button"
                        onClick={handelSubmit}
                        disabled={cart.cart.length === 0}>
                    Submit Order
                </button>
            </footer>

            {showMessage &&
                <div className="container container-window cart-message">
                <h4>{message}</h4>
                <button onClick={() => setShowMessage(false)}>OK</button>
            </div>}
        </div>
                :
                null
        }
        </div>
    );
}

export default Cart;