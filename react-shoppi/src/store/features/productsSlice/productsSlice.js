import {createSlice} from "@reduxjs/toolkit";
import products from "./product.json";

const initialState = {
    loading: false,
    products: [],
    error: '',
    category: "-select-",
    filteredProducts:[],
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,

    reducers: {
        fetchProducts(state) {
            state.loading = true;
            state.products = products;
            state.loading = false;
        },
        categoryFilter(state, action) {
                return {...state,
                    category: action.payload,
                    filteredProducts: [...state.products].filter(item =>
                        action.payload !== '-select-' ?
                        item.category === action.payload
                        :
                        true)
                }
        },
    }
});
export const {categoryFilter, fetchProducts} = productsSlice.actions;
export default productsSlice.reducer;