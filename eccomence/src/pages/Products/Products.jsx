import React from "react";
import cardData from "../../components/Card/CardData";
import Card from "../../components/Card/Card"

function Products() {
  return (
    <div className="container">
      <div className="home-title">
        <h3>Lates Products</h3>
        <ul>
          <li>All</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
          <li>Jewelery</li>
          <li>Electronics</li>
        </ul>
      </div>
      <div className="cards">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            text={card.text}
            price={card.price}
            BuyNow={card.BuyNow}
            AddToCart={card.AddToCard}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
