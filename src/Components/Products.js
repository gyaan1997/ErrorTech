
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './products.css'
import API_ENDPOINTS from '../apiConfig'
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.getAllProducts);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);


//   // Function to shuffle the products
//    const  shuffleProducts=(array)=> {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [products[i], products[j]] = [products[j], products[i]];
//     }
//   }
// var shuffledProducts=[...products]
//     var shuffledProducts = shuffleProducts(products)
//     console.log(shuffledProducts)
    
  return (
  
  <div className='product_container'>

    <div className='products'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      )).slice(0,4)}
    </div>

    
      <h4>Related Products</h4>
      <div className='related_products'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      )).slice(0,2)}
    </div>
  
    </div>
    
  );
};

export default Home;
