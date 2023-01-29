import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {useUserActions} from "../../store/features/userSlice/actionsIndex";
import {BiUser} from "react-icons/bi";
import {useOutClick} from "../../Utils-and-Hooks/useOutClick";
import {useRef} from "react";

function UserMenu({setShowUser, setShowBurgerMenu, showUser}) {
    const isMobile = useMediaQuery({query: '(max-width: 670px)'});
    const navigate = useNavigate();
    const ref = useRef();

    const {logOutUser} = useUserActions();
//ref, removeEventListener,  setClose, dropdownOptions

    useOutClick(ref, null,  setShowUser, null)

    const handelClick = (type) => {

        setShowUser(false);
        isMobile && setShowBurgerMenu(false);

        switch (type) {
            case 'login':
                navigate('/login', {state: {name: 'Login'}});
                break
            case 'sign-in':
                navigate('/sign-in', {state: {name: 'Sign-in'}});
                break
            case 'logout':
                logOutUser();
                navigate('/');
        }
    };

    return (
        <div ref={ref}>
            {
                !isMobile &&
                <button
                    className="user-button icon-button"
                    onClick={() => setShowUser(!showUser)}>
                    <BiUser/>
                </button>
            }

            {
                isMobile &&
                <button className="menu-button"
                        onClick={() => setShowUser(!showUser)}>
                    Login/Logout
                </button>

            }

            {
                showUser &&

                <div className="menu small-menu container">
                <button className="menu-button" onClick={() => handelClick('login')}>login</button>
                <hr/>
                <button className="menu-button" onClick={() => handelClick('logout')}>logout</button>
                <hr/>
                <button className="menu-button" onClick={() => handelClick('sign-in')}>signIn</button>
                </div>
            }


                </div>
                );
            }


                export default UserMenu;
