import {useDispatch} from "react-redux";
import {categoryFilter, fetchProducts} from "./productsSlice";
import {useState} from "react";


export const useProductsActions = () => {
    const dispatch = useDispatch();
    const [actions] = useState({
        categoryFilter: (category) => dispatch(categoryFilter(category)),
        fetchProducts: () => dispatch(fetchProducts()),
    });
    return actions;
}

