import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartList",
  initialState: {
    products: [], //id, amount, price, name, desc
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addOrIncrease: (state, action) => {
      const productToAdd = action.payload;

      const findExisting = state.products.findIndex((item) => {
        return item.id === productToAdd.id;
      });
      const targetProduct = state.products[findExisting];

      // let newProducts = [];

      if (!targetProduct) {
        state.products.push(productToAdd);
      } else {
        targetProduct.amount = targetProduct.amount + productToAdd.amount;
      }
      state.totalAmount = state.totalAmount + productToAdd.amount;
    },
    reducerOrRemove: (state, action) => {
      const targetId = action.payload; //product id

      const findExisting = state.products.findIndex((item) => {
        return item.id === targetId;
      });

      const targetProduct = state.products[findExisting];

      if (targetProduct.amount > 1) {
        targetProduct.amount--;
      } else if ((targetProduct.amount = 1)) {
        state.products.filter((product) => {
          return product.id !== targetId;
        });
      }
      state.totalAmount--;
    },
  },
});

export default cartSlice;

// The actions of the slice to be used / dispatched
const { actions } = cartSlice;
export const cartActions = actions;
