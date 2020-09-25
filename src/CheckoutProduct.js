import React from 'react'
import './CheckoutProduct.css';

function CheckoutProduct({id, image, title, price, rating}) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutPtoduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="CheckoutProduct"
            </div>
        </div>
    )
}

export default CheckoutProduct
