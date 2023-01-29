import './cartStyles/cartItemStyle.css';
import {GrClose} from "react-icons/gr";
import {AiOutlinePlus} from "react-icons/ai";
import {AiOutlineMinus} from "react-icons/ai";
import {useCartActions} from "../../store/features/cartSlice/actionsIndex";
import ImagePlaceHolder from "../imagePlaceHolder";

function CartItem({item, cartItem, setRemoveEventListener}) {
// item content all that related to this specific item (quantity and item'sTotal)
// and cartItem give all general info.
    const {addToCart, removeFromCart} = useCartActions();

    const handleRemoveFromCart = () => {
        // In order to avoid closing cart when an item is no longer in cart. we need to tell the useOutClick Hook
        // that though - !ref.current.contains(e.target) - it should not trigger closing the ref.current
        // because in this case after the item quantity === 0 it is no longer in ref.current, but we still  want the
        // cart to remain on the DOM, so we can see the other items that still there.
        setRemoveEventListener(true);
        removeFromCart({id: cartItem.id, acTy: '-'});

        // and then we set it back to false, so if we click out of current ref it trigger closing the current ref.
        setTimeout(() => {
            setRemoveEventListener(false);
        }, 100);
    };

    return (
        <div className="cart-item round container">
            {cartItem &&
                <div className="cart-item-content container">
                    <div className="image-cart">
                        <ImagePlaceHolder imageUrl={cartItem.image} alt={cartItem.name}/>
                    </div>
                    <p>{cartItem.title}</p>
                    <button className="icon-button" onClick={() => removeFromCart({id: cartItem.id, acTy: 'all'})}>
                        <GrClose/></button>
                </div>
            }

            {cartItem &&
                <div className="container cart-summery">
                    <div>
                        <button className="icon-button"
                                onClick={handleRemoveFromCart}
                                disabled={item.quantity <= 0}>
                            <AiOutlineMinus/>
                        </button>
                        <button className="icon-button"
                                onClick={() => addToCart({id: cartItem.id})}
                                disabled={item.quantity >= 10}>
                            <AiOutlinePlus/>
                        </button>
                    </div>
                    <p>{item.quantity} {item.quantity > 1 ? 'Items' : 'Item'}</p>
                    <p>{item.itemsTotal.toFixed(2)} $</p>
                </div>
            }
            <hr/>
        </div>
    );
}

export default CartItem;