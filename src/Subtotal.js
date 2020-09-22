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
              Sutotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal"
          </>
        )}
      />
    </div>
  )
}

export default Subtotal
