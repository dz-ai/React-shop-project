import {useDispatch} from "react-redux";
import {
    addToCart, cartCounter,
    clearSavedCart,
    fetchSavedCart,
    getSavedCart,
    orderZero,
    removeFromCart,
    saveCart, setTotalPrice,
    showCart, submitOrder
} from "./cartSlice";
import {useState} from "react";

export const useCartActions = () => {
    const dispatch = useDispatch();
    const [actions] = useState({
        /* reducers */
        getSavedCart: (cartId) => dispatch(getSavedCart(cartId)),
        addToCart: ({id, quantity, price, itemsTotal}) =>
            dispatch(addToCart({id, quantity, price, itemsTotal})),
        removeFromCart: ({id, acTy}) => dispatch(removeFromCart({id, acTy})),
        showCartFun: (term) => dispatch(showCart(term)),
        orderZero: (all) => dispatch(orderZero(all)),
        setTotalPrice: () => dispatch(setTotalPrice()),
        cartCounter: () => dispatch(cartCounter()),
        submitOrder: (cartToOrder) => dispatch(submitOrder(cartToOrder)),

        /* extraReducers */
        saveCart: ({cart}) => dispatch(saveCart({cart})),
        fetchSavedCart: () => dispatch(fetchSavedCart()),
        clearSavedCart: (cartId) => dispatch(clearSavedCart(cartId)),
    });
    return actions;
};