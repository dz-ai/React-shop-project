import {createSlice} from "@reduxjs/toolkit";
import {clearSavedCartThunk, fetchSavedCartThunk, saveCartThunk, submitOrderThunk} from "./thunks";
import {clearSavedCartBuilder, fetchSavedCartBuilder, saveCartBuilder, submitOrderBuilder} from "./builders";
import {
    addToCartReducer,
    cartCounterReducer,
    orderZeroReducer,
    removeFromCartReducer,
    setTotalPriceReducer
} from "./reducers";

const initialState = {
    cart: [],
    showCart: false,
    itemsCount: 0,
    total: 0,
    message: '',
    orderId: 0,
    savedCarts: [],
    pending: false,
}

export const saveCart = saveCartThunk('cart/saveCart');
export const fetchSavedCart = fetchSavedCartThunk('cart/fetchSavedCart');
export const clearSavedCart = clearSavedCartThunk('cart/clearSavedCart');
export const submitOrder = submitOrderThunk('cart/submitOrder');

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers(builder) {
        saveCartBuilder(builder);
        fetchSavedCartBuilder(builder);
        clearSavedCartBuilder(builder);
        submitOrderBuilder(builder);
    },
    reducers: {
        addToCart(state, action) {
            addToCartReducer(state, action);
        },
        removeFromCart(state, action) {
            removeFromCartReducer(state, action);
        },
        setTotalPrice(state) {
            setTotalPriceReducer(state);
        },
        showCart(state, action) {
            if (action.payload === false) {
                state.showCart = action.payload;
            } else {
                state.showCart = !state.showCart;
            }
        },
        cartCounter(state) {
            cartCounterReducer(state);
        },
        orderZero(state, action) {
            orderZeroReducer(state, action);
        },
        getSavedCart(state, action) {
            state.cart = state.savedCarts.find(cart => cart._id === action.payload).cart;
        },
    }
});

export const {
    addToCart,
    removeFromCart,
    setTotalPrice,
    showCart,
    cartCounter,
    orderZero,
    getSavedCart
} = cartSlice.actions;
export default cartSlice.reducer;