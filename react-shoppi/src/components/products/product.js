import './productsStyles/productStyle.css';
import './productsStyles/masonryStyles.css';
import {useCallback, useEffect, useState} from "react";
import {useCartActions} from "../../store/features/cartSlice/actionsIndex";
import ImagePlaceHolder from "../imagePlaceHolder";
import {useSelector} from "react-redux";

function Product({item}) {
    const cart = useSelector(state => state.cart);
    const {addToCart, removeFromCart} = useCartActions();

    const {id, image, category, title, description, price} = item;

    const [readMore, setReadMore] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const findItemInCart = useCallback((id) => {
        const item = cart.cart.find(item => item.id === id);
        if (item) {
            return item.quantity;
        }
    }, [cart.cart]);

    useEffect(() => {
        const itemQuantity  = findItemInCart(id);
        if (itemQuantity) {
            setQuantity(itemQuantity)
        } else {
            setQuantity(0);
        }
    }, [cart.cart]);

    return (
        <div className="product round container">

            <ImagePlaceHolder imageUrl={image} alt={title}/>

            <p>{category}</p>
            <h2>{title}</h2>
            <p>{price} $</p>

            <p>{readMore ? description : description.slice(0, 20)}
                <span className="read-more" onClick={() => setReadMore(!readMore)}>
                {readMore ? '  show less' : '  ...read more'}
            </span>
            </p>

            <div className="product-button-wrapper container">
                <button
                    className="product-button-left"
                    onClick={() => addToCart({id, quantity: 1, price, itemsTotal: price})}
                    disabled={quantity >= 10}
                >+
                </button>
                <div className="product-button-quantity">{quantity}</div>
                <button
                    className="product-button-right"
                    onClick={() => quantity > 0 && removeFromCart({id, acTy: '-'})}
                    disabled={quantity <= 0}
                >-
                </button>
            </div>

        </div>
    );
}

export default Product;