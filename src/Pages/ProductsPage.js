import React from "react";
import Products from "../Components/Products";
import "./productPage.css";
function ProductsPage() {
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
            <span class="home-link" style={{ color: "white" }}>
              Home
            </span>{" "}
            / Products
          </p>
          <h3 class="title">Shop</h3>
        </div>
      </div>

      <div>
        <Products />
      </div>
    </div>
  );
}

export default ProductsPage;
