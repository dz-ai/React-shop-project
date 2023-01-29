import './contentStyle.css';
import Products from "../../products/products";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../../login-sign-in/loginPage";
import SubmitOrder from "../../submit-order/submitOrderPage";
import {useEffect} from "react";
import {useUserActions} from "../../../store/features/userSlice/actionsIndex";

function Content() {
    const {findUser} = useUserActions();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            findUser();
        }
    }, []);

    return (
        <div className="content container">
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/sign-in" element={<LoginPage/>}/>
                <Route path="/submit" element={<SubmitOrder/>}/>
            </Routes>
        </div>
    );
}

export default Content;