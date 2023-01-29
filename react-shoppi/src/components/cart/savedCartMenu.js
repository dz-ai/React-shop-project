import './cartStyles/savedCartMenuStyle.css';

function SavedCartMenu({savedCarts, handleSavedCartClick, handleClearSavedCart}) {
    return (
        <div className="container">
            {
                savedCarts.map((savedCart) =>
                <div key={savedCart._id} className="container menu-button saved-cart-button">

                    <p onClick={() => handleSavedCartClick(savedCart._id)}>Cart - {new Date(savedCart.createdAt).toLocaleString()}</p>
                    <button onClick={() => handleClearSavedCart(savedCart._id)}>clear</button>

                </div>)
            }

        </div>
    );
}

export default SavedCartMenu;
