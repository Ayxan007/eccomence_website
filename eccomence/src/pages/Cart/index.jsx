import React, { useState, useEffect } from "react";
import "./index.css";

function Cart({ cartItems }) {
  const [defolt, setDefolt] = useState(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      return JSON.parse(storedCart);
    }

    const initialCart = cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {});

    return initialCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(defolt));
  }, [defolt]);

  useEffect(() => {
    const initialCart = cartItems.reduce((acc, item) => {
      acc[item.id] = defolt[item.id] || 1;
      return acc;
    }, {});
    setDefolt(initialCart);
  }, [cartItems]);

  const reduceBtn = (itemId) => {
    setDefolt((prevDefolt) => {
      const defoltQuantity = prevDefolt[itemId];
      if (defoltQuantity > 1) {
        return { ...prevDefolt, [itemId]: defoltQuantity - 1 };
      }
      return prevDefolt;
    });
  };
  const increaseBtn = (itemId) => {
    setDefolt((prevDefolt) => {
      const defoltQuantity = prevDefolt[itemId];
      return { ...prevDefolt, [itemId]: defoltQuantity + 1 };
    });
  };

  const calculateTotalAmount = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", "").replace(",", "."));
      return total + price * defolt[item.id];
    }, 0);

    return totalPrice + 30;
  };

  return (
    <div className="container">
      <div className="cart-title">
        <h2>Cart</h2>
      </div>
      <div className="cart">
        <div className="item">
          <div className="item-title">
            <h2>Item List</h2>
          </div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <div className="reduce">
                  <svg
                    onClick={() => reduceBtn(item.id)}
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 11H18V13H6V11Z" fill="#000000"></path>
                  </svg>
                  <p>{defolt[item.id]}</p>
                  <svg
                    onClick={() => increaseBtn(item.id)}
                    fill="#000000"
                    width="20px"
                    height="20px"
                    viewBox="-3 0 19 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.711 9.182a1.03 1.03 0 0 1-1.03 1.03H7.53v4.152a1.03 1.03 0 0 1-2.058 0v-4.152H1.318a1.03 1.03 0 1 1 0-2.059h4.153V4.001a1.03 1.03 0 0 1 2.058 0v4.152h4.153a1.03 1.03 0 0 1 1.029 1.03z"></path>
                  </svg>
                </div>
                <p>{item.price}</p>
              </div>
            ))
          ) : (
            <p>Cart empty</p>
          )}
        </div>
        <div className="order">
          <div className="order-title">
            <h2>Order Summary</h2>
          </div>
          <p>Product Count: {cartItems.length}</p>
          <p>Shipping: $30.00</p>
          <p>Total Amount: ${calculateTotalAmount()}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
