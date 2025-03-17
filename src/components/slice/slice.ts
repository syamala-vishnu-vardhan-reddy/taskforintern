import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define and export the Product type
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// Create slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.loading = true;
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { fetchProducts, fetchProductsSuccess, fetchProductsFailure } =
  productSlice.actions;

// Export reducer
export default productSlice.reducer;
