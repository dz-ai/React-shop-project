import {findUser, logUser, signUser} from "./userSlice";

export const signUserBuilder = (builder) => {
    builder.addCase(signUser.fulfilled, (state, action) => {
        state.isLog = action.payload.isSign;
        state.username = action.payload.username;
        state.message = action.payload.message;
        action.payload.token && localStorage.setItem('token', action.payload.token);
    });
}

export const logUserBuilder = (builder) => {
    builder.addCase(logUser.fulfilled, (state, action) => {
        state.isLog = action.payload.isSign;
        state.message = action.payload.message;
        state.username = action.payload.username;
        action.payload.token && localStorage.setItem('token', action.payload.token);
    });
}

export const findUserBuilder = (builder) => {
    builder.addCase(findUser.fulfilled, (state, action) => {
        state.isLog = action.payload.userLog;
        state.username = action.payload.username;
        state.message = action.payload.message;
    });
    builder.addCase(findUser.rejected, (state, action) => {
        state.isLoge = false;
        state.username = '';
    });
}
