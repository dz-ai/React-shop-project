import './headerStyles/headerMobileStyle.css';
import {BiMenu} from "react-icons/bi";
import {MdOutlineShoppingCart} from "react-icons/md";
import {useSelector} from "react-redux";
import Cart from "../../cart/cart";
import UserMenu from "../../login-sign-in/user-menu";
import {useNavigate} from "react-router-dom";
import {useProductsActions} from "../../../store/features/productsSlice/actionsIndex";


function HeaderMobileScreen(
    {handelCartButton, showBurgerMenu, setShowBurgerMenu, setShowUser, showUser, showFilter, setShowFilter}) {

    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const username = useSelector(state => state.user.username);
    const isUserLog = (state => state.user.isLog);

    const {categoryFilter} = useProductsActions();
    const handleHomeClick = (type) => {
            setShowBurgerMenu(false);
            type === 'home' && navigate('/');
    };

    const handleChange = (event) => {
        setShowBurgerMenu(false);
        setShowFilter(false);
        categoryFilter(event.target.value);
    };

    return (
        <>
            <div className="header-content-wrapper container">
                <button onClick={handelCartButton}
                        className="icon-button cart-toggle">
                    {cart.cart.length > 0 && <div className="cart-counter round">{cart.itemsCount}</div>}
                    <MdOutlineShoppingCart/>
                </button>

                {cart.showCart && cart.cart.length > 0
                    ||
                    cart.showCart && cart.savedCarts.length > 0 ?
                        <Cart cartItems={cart.cart}
                              total={cart.total}/> : null
                }

                <button className="icon-button-Header-burger"
                        onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
                    <BiMenu/>
                </button>

                 {isUserLog && username && <div className="username container">{username[0].toUpperCase()}</div>}
            </div>


            {showBurgerMenu &&
                <div className="menu container">

                    <button className="menu-button" onClick={() => handleHomeClick('home')}>
                        Home
                    </button>
                    <hr/>

                    <button className="menu-button"
                            onClick={() => setShowFilter(!showFilter)}>
                        Filter Category
                    </button>
                    <hr/>
                    {showFilter &&
                        <div className="small-menu mobile-category">
                            <select onChange={(event) => handleChange(event)}>
                                <option value={"-select-"}>-select-</option>
                                <option value="electronics">electronics</option>
                                <option value="jewelery">jewelery</option>
                                <option value="men's clothing">men's clothing</option>
                                <option value="women's clothing">women's clothing</option>
                            </select>
                        </div>
                    }
                    <button className="menu-button"
                            onClick={() => setShowUser(!showUser)}>
                        Login/Logout
                        {showUser &&
                            <UserMenu setShowUser={setShowUser}
                                      handleHomeClick={handleHomeClick}/>
                        }
                    </button>
                    <hr/>
                </div>
            }
        </>
    );
}

export default HeaderMobileScreen;