import {useEffect, useState} from "react";

export function PendingButton({buttonText, pendingTerm, onClick, onClickArgs}) {

    const [pending, setPending] = useState(false);

    // the arguments ara suppose to be an array, so it naturally spreed into the on click function.
    if (!onClickArgs) {
        onClickArgs = [null]
    }

    useEffect(() => {
        if (pendingTerm) {
            setPending(true);
        } else {
            setPending(false);
        }
    }, [pendingTerm]);


    return (
        <>
            {
                pending &&
                <div>Loading...</div>
            }

            {
                !pending &&
                <button
                    className="button"
                    onClick={() => onClick(...onClickArgs)}
                >
                    {buttonText}
                </button>
            }

        </>
    );
};