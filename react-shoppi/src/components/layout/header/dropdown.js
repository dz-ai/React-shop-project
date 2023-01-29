import {BsChevronDoubleDown, BsChevronDoubleUp} from "react-icons/bs";
import {useRef, useState} from "react";
import './headerStyles/dropdown.css';
import {useOutClick} from "../../../Utils-and-Hooks/useOutClick";
import {useMediaQuery} from "react-responsive";

function Dropdown({options, categoryValue, setCategoryValue, removeEventListener, setRemoveEventListener}) {

    const isMobile = useMediaQuery({query: '(max-width: 670px)'});


    const ref = useRef();

    const optionShow = 'options-show';
    const optionHide = 'options-hide';

    const [optionsShowState, setOptionShowState] = useState(optionHide);

    useOutClick(ref, removeEventListener, null, setOptionShowState);

    const handleDropdown = () => {
        if (optionsShowState === optionHide) {
            setRemoveEventListener(true);
            setOptionShowState(optionShow);

            setTimeout(() => {
                setRemoveEventListener(false);
            },100);
        } else {
             setRemoveEventListener(true);
            setOptionShowState(optionHide);

            setTimeout(() => {
                setRemoveEventListener(false);
            },100);
        }
    };

    const handleOption = (currentCategory) => {
        setCategoryValue(currentCategory);
        setOptionShowState(optionHide);
    };

    return (

        <div
            ref={!isMobile ? ref : null}
            className={optionsShowState !== optionShow ? "hover select container" : "select container"}
            onClick={handleDropdown}
        >
            {
                optionsShowState === optionHide &&
                <BsChevronDoubleDown
                    className="icon"
                    onClick={() => setOptionShowState(optionShow)}
                />
            }
            {
                optionsShowState === optionShow &&
                <BsChevronDoubleUp
                    className="icon"
                    onClick={() => setOptionShowState(optionHide)}
                />
            }

            {categoryValue}

            <section className={optionsShowState}>
                {options.map((category) =>
                    <div
                        key={category}
                        className="option container"
                        onClick={() => handleOption(category)}
                    >
                        {category}
                    </div>)}
            </section>
        </div>

    );
}

export default Dropdown;