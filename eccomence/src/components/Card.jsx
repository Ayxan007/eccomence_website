import React from "react";
import '../components/card.css';

const Card = ({ title, image, text, price ,  BuyNow , AddToCart }) => {
  return (
    <div className="card-container">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>
    <h4>{price}</h4>
    <button>{BuyNow}</button>
    <button>{AddToCart}</button>
    </div>
  );
};

export default Card;
