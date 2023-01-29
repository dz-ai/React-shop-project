import {useDispatch} from "react-redux";
import {findUser, logOutUser, logUser, signUser, resetMessage} from "./userSlice";
import {useState} from "react";

export const useUserActions = () => {
    const dispatch = useDispatch();
    const [actions] = useState({
        /* reducers */
        logOutUser: () => dispatch(logOutUser()),
        resetMessage: () => dispatch(resetMessage()),

        /* extraReducers */
        signUser: (user) => dispatch(signUser(user)),
        logUser: (user) => dispatch(logUser(user)),
        findUser: () => dispatch(findUser()),
    });
    return actions;
}