export const addToCartReducer = (state, action) => {
    const item = state.cart.find(item => item.id === action.payload.id);
    if (item === undefined) {
        state.cart.push(action.payload);
    } else {
        item.quantity++;
        item.itemsTotal = item.quantity * item.price;
    }
}

export const removeFromCartReducer = (state, action) => {
    if (action.payload.acTy === 'all') {
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
        if (state.cart.length === 0) state.showCart = false;
    } else {
        const item = state.cart.find(item => item.id === action.payload.id);
        item.quantity--;
        item.itemsTotal = item.quantity * item.price;

        if (item.quantity === 0) {
            state.cart = [...state.cart.filter(filterItem => {
                return filterItem.id !== item.id;
            })];
        }
    }
}

export const setTotalPriceReducer = (state) => {
    state.total = state.cart.reduce((p, c) => {
        p = p + c.itemsTotal;
        return p
    }, 0)
}

export const cartCounterReducer = (state) => {
    state.itemsCount = state.cart.reduce((p, c) => {
        p = p + c.quantity;
        return p;
    }, 0)
}

export const orderZeroReducer = (state, action) => {
    if (action.payload === 'all') {
        state.cart = [];
        state.itemsCount = 0;
        state.total = 0;
        state.message = '';
        state.orderId = 0;
    } else {
        state.savedCarts = [];
    }
}

