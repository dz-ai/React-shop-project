
export function ShippingDetails({country, city, street, houseNumber, postalCode, handleInputChange}) {

    const { setCountry, setCity, setStreet, setHouseNumber, setPostalCode } = handleInputChange;

    return (
            <div className="submit-order-input-fields">

                <h3>Shipping Details</h3>

                <div className="submit-order-input-field container">
                    <label>Country: </label>
                    <input
                        type="text"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>

                <div className="submit-order-input-field container">
                    <label>City: </label>
                    <input
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>

                <div className="submit-order-input-field container">
                    <label>street: </label>
                    <input
                        placeholder="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>

                <div className="submit-order-input-field container">
                    <label>Number: </label>
                    <input
                        placeholder="Number"
                        value={houseNumber}
                        onKeyDown={(e) => !/(Tab)|(Backspace)|[0-9]/.test(e.key) ? e.preventDefault() : null}
                        onChange={(e) => setHouseNumber(e.target.value)}
                    />
                </div>

                <div className="submit-order-input-field container">
                    <label>Postal-Code: </label>
                    <input
                        placeholder="Postal-Code"
                        value={postalCode}
                        onKeyDown={(e) => !/(Tab)|(Backspace)|[0-9]/.test(e.key) ? e.preventDefault() : null}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </div>

            </div>
    );
}