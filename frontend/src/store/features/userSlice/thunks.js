import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchFun} from "../fetchFun";

export const signUserThunk = (typePrefix) =>
    createAsyncThunk(typePrefix, initUser => {
    return fetchFun(
        '/users/signIn',
        'post',
        {'Content-Type': 'application/json'},
        initUser);
});

export const loginUserThunk = (typePrefix) =>
    createAsyncThunk(typePrefix, initUser => {
        return fetchFun(
            '/users/logIn',
            'post',
            {'Content-Type': 'application/json'},
            initUser);
    });

export const findUserThunk = (typePrefix) =>
    createAsyncThunk(typePrefix, () => {
        return fetchFun(
            '/users/find-user',
            'get',
            {
                'Content-Type': 'application/json',
                'auth': `Bearer ${localStorage.getItem('token')}`,
            });
    });