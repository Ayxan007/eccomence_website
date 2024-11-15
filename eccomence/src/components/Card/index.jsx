import React from "react";
import './card.css';

const Card = ({ title, image, text, price ,  buyNow , addToCart }) => {
  return (
    <div className="card-container">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>
    <h4>{price}</h4>
    <button>{buyNow}</button>
    <button>{addToCart}</button>
    </div>
  );
};

export default Card;