import './headerStyles/headerStyle.css';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import HeaderWideScreen from "./header-wide-screen";
import {useMediaQuery} from "react-responsive";
import HeaderMobileScreen from "./header-mobile-screen";
import {useCartActions} from "../../../store/features/cartSlice/actionsIndex";

function Header() {
    const isMobile = useMediaQuery({query: '(max-width: 670px)'});

    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);

    const {fetchSavedCart, orderZero, setTotalPrice, cartCounter, showCartFun} = useCartActions();

    const [showUser, setShowUser] = useState(false);
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        if (user.isLog) {
            fetchSavedCart();
        } else {
            orderZero();
        }
    }, [user.isLog])

    useEffect(() => {
        setTotalPrice();
        cartCounter();
    }, [cart.cart]);

    const handelUserButton = () => {
        if (cart.showCart) {
            setShowUser(!showUser);
            showCartFun();
        } else {
            setShowUser(!showUser);
        }
    };

    const handelCartButton = () => {
        if (cart.savedCarts.length > 0) {
            showCartFun();
            return
        }
        if (cart.cart.length !== 0 && showUser) {
            setShowUser(false);
            showCartFun();
        } else {
            showCartFun();
        }
    };

    return (
        <div className="header container">
            <h1>Shoppi</h1>

            {!isMobile && <HeaderWideScreen
                handelCartButton={handelCartButton}
                handelUserButton={handelUserButton}
                setShowUser={setShowUser}
                showUser={showUser}/>}

            {isMobile && <HeaderMobileScreen
                handelCartButton={handelCartButton}
                showBurgerMenu={showBurgerMenu}
                setShowBurgerMenu={setShowBurgerMenu}
                showUser={showUser}
                setShowUser={setShowUser}
                showFilter={showFilter}
                setShowFilter={setShowFilter}/>}
        </div>
    );
};

export default Header;