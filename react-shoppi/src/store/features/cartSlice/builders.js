import {clearSavedCart, fetchSavedCart, saveCart, submitOrder} from "./cartSlice";

export const saveCartBuilder = (builder) => {
    builder.addCase(saveCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart;
        state.savedCarts = action.payload.carts;
        //console.log(state.savedCarts.length)
    });
}

export const fetchSavedCartBuilder = (builder) => {
    builder.addCase(fetchSavedCart.fulfilled, (state, action) => {
        state.savedCarts = action.payload.carts;
        //console.log(state.savedCarts)
    });
}

export const clearSavedCartBuilder = (builder) => {
    builder.addCase(clearSavedCart.fulfilled, (state, action) => {
        state.savedCarts = action.payload.carts;
        //console.log(state.savedCarts);
    });
}

export const submitOrderBuilder = (builder) => {
    builder.addCase(submitOrder.fulfilled, (state, action) => {
        state.pending = false;
        state.message = action.payload.message;
        state.orderId = action.payload.orderId;
        state.cart = [];
    });
    builder.addCase(submitOrder.pending, (state) => {
        state.pending = true;
    });
    builder.addCase(submitOrder.rejected, (state) => {
        state.pending = false;
        state.message = 'credit card rejected please contact the credit company';
    });
}