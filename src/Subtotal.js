import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                          Sutotal ()
                        </p>
                    </>
                )}
            />
        </div>
    )
}

export default Subtotal
