import React, { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import Cart from "./components/cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]); // zakhire itemaye sabad kharid

  // function baraye ezafe kardan be sabad kahrid
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // agr item qablan voojood dasht fqt tedade oono afzayesh midim
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // agr item jadid bood ezafe beshe be sabad kahrid
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // function baraye afzayesh ya kaheshe items
  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item
      )
    );
  };

  return (
    <div>
      <Header />
      <Menu onAddToCart={handleAddToCart} />
      <Cart items={cartItems} onQuantityChange={handleQuantityChange} />
    </div>
  );
}

export default App;
