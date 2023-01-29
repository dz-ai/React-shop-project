import './headerStyles/headerMobileStyle.css';
import {useSelector} from "react-redux";
import Cart from "../../cart/cart";
import {useProductsActions} from "../../../store/features/productsSlice/actionsIndex";
import {useEffect} from "react";
import {BurgerMenu} from "./burgerMenu";


function HeaderMobileScreen(
    {
        handleHomeButton,
        handelCartButton,
        handelUserButton,
        showBurgerMenu,
        setShowBurgerMenu,
        setShowUser,
        showUser,
        setShowFilter,
        category
    }) {

    const cart = useSelector(state => state.cart);
    const username = useSelector(state => state.user.username);
    const isUserLog = (state => state.user.isLog);

    const {categoryFilter} = useProductsActions();
    const {options, categoryValue, setCategoryValue} = category;

    useEffect(() => {
        setShowBurgerMenu(false);
        setShowFilter(false);
        categoryFilter(categoryValue);
    }, [categoryValue]);

    return (
        <>
            <div className="header-content-wrapper container">
                <Cart
                    cartItems={cart.cart}
                    total={cart.total}
                    handleCartButton={handelCartButton}
                />
                <BurgerMenu
                    showBurgerMenu={showBurgerMenu}
                    setShowBurgerMenu={setShowBurgerMenu}
                    showUser={showUser}
                    setShowUser={setShowUser}
                    handleHomeButton={handleHomeButton}
                    handelUserButton={handelUserButton}
                    options={options}
                    categoryValue={categoryValue}
                    setCategoryValue={setCategoryValue}
                />

                {isUserLog && username && <div className="username container">{username[0].toUpperCase()}</div>}
            </div>
        </>
    );
}

export default HeaderMobileScreen;