import {BiMenu} from "react-icons/bi";
import Dropdown from "./dropdown";
import UserMenu from "../../login-sign-in/user-menu";
import {useRef, useState} from "react";
import {useOutClick} from "../../../Utils-and-Hooks/useOutClick";

export function BurgerMenu({
                               showBurgerMenu,
                               setShowBurgerMenu,
                               showUser,
                               setShowUser,
                               handleHomeButton,
                               handelUserButton,
                               options,
                               categoryValue,
                               setCategoryValue
                           }) {
    ////// START THE FUN //////
    const [removeEventListener, setRemoveEventListener] = useState(false);

    const ref = useRef();

    useOutClick(ref, removeEventListener,  setShowBurgerMenu, null);

    return (
        <div ref={ref}>
            <button className="icon-button-Header-burger"
                    onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
                <BiMenu/>
            </button>


            {showBurgerMenu &&
                <div className="menu container">

                    <button className="menu-button" onClick={handleHomeButton}>
                        Home
                    </button>
                    <hr/>

                    <Dropdown
                        options={options}
                        categoryValue={categoryValue}
                        setCategoryValue={setCategoryValue}
                        removeEventListener={null}
                        setRemoveEventListener={setRemoveEventListener}
                    />
                    <hr/>

                            <UserMenu
                                showUser={showUser}
                                setShowUser={setShowUser}
                                setShowBurgerMenu={setShowBurgerMenu}
                                handelUserButton={handelUserButton}
                            />

                    <hr/>
                </div>
            }
        </div>
    );
}