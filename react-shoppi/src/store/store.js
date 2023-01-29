import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice/productsSlice";
import cartSlice from "./features/cartSlice/cartSlice";
import userSlice from "./features/userSlice/userSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        user: userSlice,
    }
});