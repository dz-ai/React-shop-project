import './productsStyles/productsStyle.css';
import Product from "./product";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useProductsActions} from "../../store/features/productsSlice/actionsIndex";

function Products() {
    const productsState = useSelector(state => state.products);

    const {fetchProducts} = useProductsActions();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if (productsState.filteredProducts.length > 0) {
            setProducts(productsState.filteredProducts);
        } else {
            setProducts(productsState.products);
        }
    }, [productsState]);

    return (
        <div className="container products-wrapper">
            <div className="products container">
                {productsState.loading === true
                    ?
                    <h2>loading...</h2>
                    :
                    products.map(item =>
                        <Product key={item.id}
                                 item={item}/>)
                }
            </div>
        </div>
    );
}

export default Products;