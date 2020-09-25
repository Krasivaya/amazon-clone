import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p><span role="img" aria-label="star">⭐</span></p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="product" />
      <button onClick={addToBasket} className="product__button">Add to Basket</button>
    </div>
  );
}

export default Product;
