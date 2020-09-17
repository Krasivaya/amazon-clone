import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img
        className="product__image"
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        alt="product image"
      />
      <button className="product__button">Add to Basket</button>
    </div>
  );
}

export default Product;
