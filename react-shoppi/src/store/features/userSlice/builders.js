import {findUser, logUser, signUser} from "./userSlice";

export const signUserBuilder = (builder) => {
    builder.addCase(signUser.fulfilled, (state, action) => {
        state.pending = false;
        state.isLog = action.payload.isSign;
        state.message = action.payload.message;
        if (action.payload.token) {
            localStorage.setItem('token', action.payload.token);
            state.username = action.payload.username;
        }
    });
    builder.addCase(signUser.pending, (state) => {
       state.pending = true;
    });
    builder.addCase(signUser.rejected, (state) => {
       state.pending = false;
    });
}

export const logUserBuilder = (builder) => {
    builder.addCase(logUser.fulfilled, (state, action) => {
        state.pending = false;
        state.isLog = action.payload.isSign;
        state.message = action.payload.message;
        state.username = action.payload.username;
        action.payload.token && localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(logUser.pending, (state) => {
        state.pending = true;
    });
    builder.addCase(logUser.rejected, (state) => {
        state.pending = false;
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
