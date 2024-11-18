import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index";
import Products from "./pages/Products/Products";
import About from "./pages/About/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/index";
import NotFound from "./pages/NotFound/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Cart from "./pages/Cart/index";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (card) => {
    setCart((prevCart) => {
      const alreadyCart = prevCart.some((item) => item.id === card.id);
      if (alreadyCart) {
        return prevCart;
      }
      alert("Added to Cart");
      return [...prevCart, card];
    });
  };

  return (
    <BrowserRouter>
      <Header cartItems={cart} />
      <Routes>
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
