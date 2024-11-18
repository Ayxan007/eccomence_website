import React from "react";
import "./card.css";

function Card({ title, image, text, price, buyNow, addToCart }) {
  return (
    <div className="card-container">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{text}</p>
      <p>{price}</p>
      <button>{buyNow}</button>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}

export default Card;
