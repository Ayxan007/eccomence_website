import React from "react";
import "./home.css";
import cardData from "../../components/Card/cardData";
import Card from "../../components/Card/index";

function Home({ handleAddToCart }) {
  return (
    <>
      <div className="container">
        <div className="text-with-background">
          <h2>New Season Arrivals</h2>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
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
              buyNow={card.buyNow}
              addToCart={() => handleAddToCart(card)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
