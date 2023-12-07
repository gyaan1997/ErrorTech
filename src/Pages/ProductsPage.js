import React ,{useState,useEffect} from 'react'
// import Products from '../Components/Products'
import ProductHero from '../Components/ProductHero'
import API_ENDPOINTS from '../apiConfig'
import axios from 'axios'
function ProductsPage() {
    const [prods, setProds] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(API_ENDPOINTS.getAllProducts);
          setProds(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div>
        <div>
<h1>Product single  Page</h1>
<ProductHero/>
</div>
        {/* <Products/> */}
    </div>
  )
}

export default ProductsPage