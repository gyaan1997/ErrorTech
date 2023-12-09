
const BASE_URL = 'https://fakestoreapi.com';

 const API_ENDPOINTS = {
  getAllProducts: `${BASE_URL}/products`,
  getSingleProduct: (productId) => `${BASE_URL}/products/${productId}`,
  login: `${BASE_URL}/auth/login`,
  getAllCarts: `${BASE_URL}/carts`,
  getSingleCart: (cartId) => `${BASE_URL}/carts/${cartId}`,
};
export default API_ENDPOINTS;