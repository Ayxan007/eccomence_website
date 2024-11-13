import React from "react";
import "../pages/home.css";
import Card from "../components/Card";
import imageCasual from "../images/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
import imageCotton from "../images/71li-ujtlUL._AC_UX679_.jpg";
import imageCasual2 from "../images/71YXzeOuslL._AC_UY879_.jpg";
import imgBracelet from "../images/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg";
import imgBracelet2 from "../images/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg";
import imgWD2TB from "../images/61IBBVJvSDL._AC_SY879_.jpg"

const cardData = [
  {
    title: "Mens Casual",
    image: imageCasual,
    text: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight",
    price: "$ 22,3",
    BuyNow: "Buy Now",
    AddToCard: "Add To Cart",
  },
  {
    title: "Mens Cotton",
    image: imageCotton,
    text: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as wor",
    price: "$ 55.99",
    BuyNow: "Buy Now",
    AddToCard: "Add To Cart",
  },
  {
      title: "Mens Casual",
      image: imageCasual2,
      text: "The color could be slightly different between on the screen and in practice. / Please note",
      price: "$ 15.99",
      BuyNow: "Buy Now",
      AddToCard: "Add To Cart",
  }, 
  {
      title: "John Hardy",
      image: imgBracelet,
      text: "From our Legends Collection, the Naga was inspired by the mythical water dragon that prote",
      price: "$ 695",
      BuyNow: "Buy Now",
      AddToCard: "Add To Cart",
  },
  {
      title: "Solid Gold",
      image: imgBracelet2,
      text: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by ",
      price: "$ 168",
      BuyNow: "Buy Now",
      AddToCard: "Add To Cart",
  },
  {
      title: "WD 2TB Eleme",
      image: imgWD2TB,
      text: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity",
      price: "$ 64",
      BuyNow: "Buy Now",
      AddToCard: "Add To Cart",
  }
];

function Home() {

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
          {...card}
        />
      ))}
      </div>
      </div>
    </>
  );
}

export default Home;
