import {useDispatch} from "react-redux";
import {findUser, logOutUser, logUser, signUser} from "./userSlice";
import {useState} from "react";

export const useUserActions = () => {
    const dispatch = useDispatch();
    const [actions] = useState({
        /* reducers */
        logOutUser: () => dispatch(logOutUser()),
        /* extraReducers */
        signUser: (user) => dispatch(signUser(user)),
        logUser: (user) => dispatch(logUser(user)),
        findUser: () => dispatch(findUser()),
    });
    return actions;
}