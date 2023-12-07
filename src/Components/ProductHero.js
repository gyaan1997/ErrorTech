import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_ENDPOINTS from '../apiConfig';
import { useNavigate, useLocation } from 'react-router-dom';
import { addToCart } from '../Reducers/cartSlice';
import { useDispatch } from 'react-redux';

function ProductHero() {
  const location = useLocation();
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const singleProductId = location.state.productId;
  const [product, setProduct] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.getSingleProduct(singleProductId));
        setProduct(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [singleProductId]);

  const handleAddTocart=()=>{
    
    dispatch(addToCart(product));
    console.log("action dispatched with payload",product)
    navigate('/cart')
  }

  return (
    <div>
      <div className="product-card card">
        <div className="card-body">
          <p className="card-text">{product.title}</p>
          <p>Price: ${product.price}</p>
          <button onClick={handleAddTocart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductHero;
