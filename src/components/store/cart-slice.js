import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartList",
  initialState: {
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const ProductToAdd = action.payload;
    },
    removeFromCart: (state, action) => {
      const ProductToRemove = action.payload;
    },
  },
});

export default cartSlice;
