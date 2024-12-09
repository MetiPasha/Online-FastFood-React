import React, { useState } from "react";
import Menu from "./components/menu";
import Cart from "./components/cart";
import Header from "./components/header";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, action = "increase") => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  action === "increase"
                    ? item.quantity + 1
                    : Math.max(item.quantity - 1, 0),
              }
            : item
        );
      } else {
        return action === "increase"
          ? [...prevItems, { ...product, quantity: 1 }]
          : prevItems;
      }
    });
  };

  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 0),
            }
          : item
      )
    );
  };

  return (
    <div>
      <Header />
      <Menu onAddToCart={handleAddToCart} cartItems={cartItems} />
      <Cart items={cartItems} onQuantityChange={handleQuantityChange} />
    </div>
  );
}

export default App;
