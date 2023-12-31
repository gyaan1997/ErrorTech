import React, { useState, useEffect } from "react";
import axios from "axios";
import API_ENDPOINTS from "../apiConfig";
import { useParams } from "react-router-dom";
import { addToCart } from "../Reducers/cartSlice";
import { useDispatch } from "react-redux";
import './productHero.css';
function ProductHero() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.getSingleProduct(id));
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleAddTocart = () => {
    dispatch(addToCart(product));
    setAddedToCart(true); 
  };

  return (
 <>
 <div className="product-hero" >
        <div class="ripple-design">
          <div class="ripple-circle very-small shade0"></div>
          <div class="ripple-circle small shade1"></div>
          <div class="ripple-circle medium shade2"></div>
          <div class="ripple-circle large shade3"></div>
        </div>
        <div class="products-nav">
          <p class="breadCrump">
            <span class="home-link">Home</span> / Shop
          </p>
          <h3 class="title">Shop</h3>
       
        </div>
      </div>

    <div className="d-flex justify-content-center align-items-center vh-100  ">   
       
    <div class="product-details-card">
      <div class="product-detail-left-container">
        <div class="product-details-name">
          <p>{product.title}</p>
        </div>
        <div class="product-details-description">
          <p>
            {product.description}
          </p>
        </div>
        
      </div>
      <div class="product-detail-middle-container">
        <div class="product-image-gallery">
          <img
            src={product.image}
            width="265"
            height="111"
            alt="product-gallery"
          />
        </div>

        <div class="product-detail-price">
          <span>${product.price}</span>
        </div>
      </div>
      <div class="product-detail-right-container">
      {addedToCart ? (
         <button className="addedMessage" onClick={handleAddTocart}>
         Added
       </button>
        ) : (
          <button className="addtocartButton" onClick={handleAddTocart}>
            Add to cart
          </button>
        )}      </div>
     
    </div>
    </div>

    </>
  );
}

export default ProductHero;
