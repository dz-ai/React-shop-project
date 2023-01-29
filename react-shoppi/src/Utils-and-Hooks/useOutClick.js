import {useEffect} from "react";

export const useOutClick = (ref, removeEventListener,  setClose, dropdownOptions) => {
    useEffect(() => {
        const clickHandler = (e) => {

            if (removeEventListener) {
                return;
            }

            if (ref.current && !ref.current.contains(e.target)) {
                setClose && setClose(false);
                dropdownOptions && dropdownOptions('options-hide');
            }
        }

        window.addEventListener('click', clickHandler);

        return () => {
            window.removeEventListener('click', clickHandler);
        };
    }, [ref, removeEventListener]);

};