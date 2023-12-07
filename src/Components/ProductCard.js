// ProductCard.js
import React from 'react';
import './productCard.css'; // Import any additional custom styles
import { useNavigate } from 'react-router-dom';
// import ProductHero from './ProductHero';

const ProductCard = ({product}) => {
  const navigate= useNavigate();
 
  const handleClick = (product) => {
    const productId = product.id;
    // console.log(productId);
    navigate(`/products/${productId}`, { state: { productId: productId } });
  };

  return (
    <div className="product-card card">
      <div className="card-body"
      onClick={()=>handleClick (product)}
      >
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.price}</p>
     
      </div>
    </div>
  );
};

export default ProductCard;
