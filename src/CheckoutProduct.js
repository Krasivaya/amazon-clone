import React from 'react'
import './CheckoutProduct.css';

function CheckoutProduct({id, image, title, price, rating}) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutPtoduct__image" src={image} alt="Checkout Product" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title"></p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
