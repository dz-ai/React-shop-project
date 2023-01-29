import './productsStyles/productsStyle.css';
import Product from "./product";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useProductsActions} from "../../store/features/productsSlice/actionsIndex";
import Masonry from 'react-masonry-css'
import {useCartActions} from "../../store/features/cartSlice/actionsIndex";

function Products() {
    const productsState = useSelector(state => state.products);
    const cartState = useSelector(state => state.cart)

    const {orderZero} = useCartActions();

    const {fetchProducts} = useProductsActions();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
        if (cartState.orderId !== 0) {
            orderZero('all');
        }
    }, []);

    useEffect(() => {
        if (productsState.filteredProducts.length > 0) {
            setProducts(productsState.filteredProducts);
        } else {
            setProducts(productsState.products);
        }
    }, [productsState]);

    const breakpoints = {
        default: 4,
        1100: 3,
        850: 2,
        600: 1,
    }

    return (
        <div className="container products-wrapper">
            {/*className="products container"*/}
            <Masonry
                breakpointCols={breakpoints}
                      className="my-masonry-grid"
                      columnClassName="my-masonry-grid_column">

                {productsState.loading === true
                    ?
                    <h2>loading...</h2>
                    :
                    products.map(item =>
                        <Product key={item.id}
                                 item={item}/>)
                }
            </Masonry>
        </div>
    );
}

export default Products;