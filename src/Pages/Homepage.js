import React from "react";
import "./homepage.css";
import Products from "../Components/Products";
import RelatedProducts from '../Components/RelatedProducts'

function HomePage() {
  
  return (
    <div>
      <div className="product-hero">
        <div class="ripple-design">
          <div class="ripple-circle very-small shade0"></div>
          <div class="ripple-circle small shade1"></div>
          <div class="ripple-circle medium shade2"></div>
          <div class="ripple-circle large shade3"></div>
        </div>
        <div class="products-nav">
          <p class="breadCrump">
            <span class="home-link" style={{color:"white"}}>Home</span> / Shop
          </p>
          <h3 class="title">Shop</h3>
          <div class="result-sorting">
            <p>Showing 1-12 of 36 results</p>
            <select id="sortigOrder" name="sortigOrder">
              <option value="defaultSorting">Default sorting</option>
              <option value="newest">Latest</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </div>
      </div>

     <div className="items">
      <div>
      <Products limit={4} />
      </div>
  
     <h4>Related Products</h4>
     <div>
     <RelatedProducts limit={4}/>
     </div>
     </div>
   
    </div>
  );
}

export default HomePage;
