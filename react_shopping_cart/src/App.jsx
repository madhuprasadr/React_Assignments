import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

function App() {
  // State to track cart items
  const [cart, setCart] = useState([]);

  // Function to add or remove items from the cart
  const toggleCartItem = (product) => {
    if (cart.includes(product)) {
      setCart(cart.filter(item => item !== product)); // Remove item
    } else {
      setCart([...cart, product]); // Add item
    }
  };

  return (
    <div className="container">
      <header className="py-5">
        <h1 className="text-center"> Madhu's Mobile Shop </h1>
      </header>
      <ShoppingCart cartItems={cart.length} />
      <ProductList cart={cart} toggleCartItem={toggleCartItem} />
    </div>
  );
}

export default App;
