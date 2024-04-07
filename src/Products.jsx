import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

function Product({ product }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    // Store product details in local storage
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    // Navigate to the /buy page
    navigate('/buy');
  };

  return (
    <div className="product-item" onClick={handleProductClick}>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <img src={product.imageUrl} alt={product.title} />
    </div>
  );
}

export default Product;
