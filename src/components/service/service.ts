import axios from "axios";

// Base URL
const API_URL = "https://fakestoreapi.com/products";

// Function to fetch products
export const fetchProductsApi = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
