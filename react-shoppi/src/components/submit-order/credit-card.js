export function CreditCard({cardType, cvc, expiryYear, expiryMonth, number, handleInputChange}) {

    const {setCardType, setCardNum, setExpiryYear, setExpiryMonth, setCvc} = handleInputChange;

    const creditCardFormat = (value) => {
        const v = value
            .replace(/\s+/g, "")
            .replace(/[^0-9]/gi, "")
            .substring(0);
        const parts = [];

        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substring(i, i + 4));
        }

        return parts.length > 1 ? parts.join(" ") : value;
    }

    return (
        <div className="submit-order-input-fields">

            <h3>Credit Card</h3>

            <img
                src={`https://ik.imagekit.io/${process.env.REACT_APP_IMAGEKIT_KEY}/shoppi-imgs/PngItem_1604068.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673723180224`}
                alt="visa and master card logo"
                width="100"
                height="auto"
            />

            <div className="submit-order-input-field container">
                <label>credit card: </label>
                <select value={cardType} onChange={(e) => setCardType(e.target.value)}>
                    <option value="visa">visa</option>
                    <option value="master-card">master-card</option>
                    <option value="american-express">american-express</option>
                </select>
            </div>

            <div className="submit-order-input-field container">
                <label>Card Number:</label>
                <input
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    value={creditCardFormat(number)}
                    maxLength="19"
                    onKeyDown={(e) => !/(Tab)|(Backspace)|[0-9]/.test(e.key) ? e.preventDefault() : null}
                    onChange={(e) => setCardNum(e.target.value)}
                />
            </div>

            <div className="submit-order-input-field container">
                <label>Expire Date:</label>
                <div>
                    <input
                        style={{width: '35px'}}
                        maxLength="2"
                        placeholder="00"
                        value={expiryMonth}
                        onKeyDown={(e) => !/(Tab)|(Backspace)|[0-9]/.test(e.key) ? e.preventDefault() : null}
                        onChange={(e) => setExpiryMonth(e.target.value)}
                    />
                    /
                    <input
                        style={{width: '35px'}}
                        maxLength="2"
                        placeholder="00"
                        value={expiryYear}
                        onKeyDown={(e) => !/(Tab)|(Backspace)|[0-9]/.test(e.key) ? e.preventDefault() : null}
                        onChange={(e) => setExpiryYear(e.target.value)}
                    />
                </div>
            </div>

            <div className="submit-order-input-field container">
                <label>CVC:</label>
                <input
                    value={cvc}
                    maxLength="3"
                    onKeyDown={(e) => !/(Tab)|(Backspace)|[0-9]/.test(e.key) ? e.preventDefault() : null}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="3 numbers on back card"
                />
            </div>

        </div>


    );
}

