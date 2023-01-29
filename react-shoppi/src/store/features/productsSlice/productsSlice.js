import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiUrl} from "../fetchFun";
import products from "./product.json";

const initialState = {
    loading: false,
    products: [],
    error: '',
    category: "-select-",
    filteredProducts:[],
};

// export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
//     return fetch(`${apiUrl}/products/fetch-products`)
//         .then(res => res.json())
//         .then(results => results);
// });

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    extraReducers: builder => {
        // builder.addCase(fetchProducts.pending, state => {
        //     state.loading = true;
        // });
        // builder.addCase(fetchProducts.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.products = action.payload;
        //     state.error = '';
        // });
        // builder.addCase(fetchProducts.rejected, (state, action) => {
        //     state.loading = false;
        //     state.products = [];
        //     state.error = action.error.message;
        // });
    },
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