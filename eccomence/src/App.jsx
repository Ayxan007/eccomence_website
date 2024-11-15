import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home/index";
import Products from "./pages/Products/Products";
import About from "./pages/About/index";
import {BrowserRouter, Route , Routes } from "react-router-dom"
import Contact from "./pages/Contact/index";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
