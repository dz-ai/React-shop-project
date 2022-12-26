import {createSlice} from "@reduxjs/toolkit";
import {findUserThunk, loginUserThunk, signUserThunk} from "./thunks";
import {findUserBuilder, logUserBuilder, signUserBuilder} from "./builders";

const initialState = {
    username: '',
        message: 'please fill the form to sign/log in',
        isLog: false,
}

export const signUser = signUserThunk('user/signUser');
export const logUser = loginUserThunk('user/logUser');
export const findUser = findUserThunk('user/findUser');


export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers(builder) {
        signUserBuilder(builder);
        logUserBuilder(builder);
        findUserBuilder(builder);
    },
    reducers: {
        logOutUser(state) {
            state.isLog = false;
            state.username = '';
            localStorage.removeItem('token');
            state.message = 'please fill the form to sign/log in';
        },
    },
});

export const {logOutUser} = userSlice.actions;
export default userSlice.reducer;