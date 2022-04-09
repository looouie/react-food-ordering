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

      const findExisting = state.products.findIndex((item) => {
        return item.id === ProductToAdd.id;
      });
      const existingProduct = state.products[findExisting];

      let newProducts = [];
      let updateProduct;

      if (!existingProduct) {
        newProducts.push(ProductToAdd);
      } else {
        newProducts = [...state.products];
        updateProduct = {
          ...existingProduct,
          amount: existingProduct.amount + ProductToAdd.amount,
        };
        newProducts[existingProduct] = updateProduct;
      }
    },
    removeFromCart: (state, action) => {
      const ProductToRemove = action.payload;

      const findExisting = state.products.findIndex((item) => {
        return item.id === ProductToRemove.id;
      });
    },
  },
});

export default cartSlice;
