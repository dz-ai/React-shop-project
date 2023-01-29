import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchFun} from "../fetchFun";


export const saveCartThunk = (typePrefix) =>
    createAsyncThunk(typePrefix, initCart => {
        return fetchFun(
            '/carts/save-cart',
            'post',
            {
                'Content-Type': 'application/json',
                'auth': `Bearer ${localStorage.getItem('token')}`,
            },
            initCart);
    });

export const fetchSavedCartThunk = (typePrefix) =>
    createAsyncThunk(typePrefix, () => {
        return fetchFun(
            '/carts/saved-cart',
            'get',
            {
                'Content-Type': 'application/json',
                'auth': `Bearer ${localStorage.getItem('token')}`,
            });
    });

export const clearSavedCartThunk = (typePrefix) =>
    createAsyncThunk(typePrefix, (cartToClear) => {
        return fetchFun(
            '/carts/saved-cart',
            'delete',
            {
                'Content-Type': 'application/json',
                'auth': `Bearer ${localStorage.getItem('token')}`,
            },
            {cartId: cartToClear}
            );
    });

export const submitOrderThunk = (typePrefix) =>
    createAsyncThunk(typePrefix, (initOrder) => {
        return fetchFun(
            '/order/submit-order',
            'post',
            {
                'Content-Type': 'application/json',
                'auth': `Bearer ${localStorage.getItem('token')}`,
            },
            initOrder
        );
    });



