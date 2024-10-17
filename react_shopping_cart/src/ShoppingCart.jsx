import React from 'react';

function ShoppingCart({ cartItems }) {
  return (
    <div className="mb-4 text-right">
      <button className="btn btn-info">
        Cart ({cartItems} items)
      </button>
    </div>
  );
}

export default ShoppingCart;
