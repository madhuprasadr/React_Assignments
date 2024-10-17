import React from 'react';

// Sample products data
const products = [
  { id: 1, name: 'Redmi 13 5G', description: 'Redmi 13 5G, Orchid Pink, 6GB+128GB | India Debut SD 4 Gen 2 AE | 108MP Pro Grade Camera | 6.79in Largest Display in Segment' },
  { id: 2, name: 'iQOO Z9X 5G', description: 'iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge' },
  { id: 3, name: 'Samsung Galaxy M05', description: 'Samsung Galaxy M05 (Mint Green, 4GB RAM, 64 GB Storage) | 50MP Dual Camera | Bigger 6.7" HD+ Display | 5000mAh Battery | 25W Fast Charging | 2 Gen OS Upgrade & 4 Year Security' }
];

function ProductList({ cart, toggleCartItem }) {
  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <button
                className={`btn ${cart.includes(product) ? 'btn-danger' : 'btn-primary'}`}
                onClick={() => toggleCartItem(product)}
              >
                {cart.includes(product) ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
