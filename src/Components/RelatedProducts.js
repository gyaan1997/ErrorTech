import React, { useState, useEffect } from "react";
import API_ENDPOINTS from "../apiConfig";
import axios from "axios";
import ProductCard from "./ProductCard";
function RelatedProducts({ limit }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.getAllProducts);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // shuffled items to show on related product section
  const shuffledProducts = shuffleArray(products);
  const limitedProducts = limit
    ? shuffledProducts.slice(0, limit)
    : shuffledProducts;

  return (
    <div style={{ display: "flex", flexDirection: "row",flexWrap:"wrap",justifyContent:"center" }}>
      {limitedProducts.slice(0, 4).map((relatedProduct) => (
        <div key={relatedProduct.id}>
          <ProductCard key={relatedProduct.id} product={relatedProduct} />
        </div>
      ))}
    </div>
  );
}

export default RelatedProducts;
