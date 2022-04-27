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

      if (!targetProduct) {
        state.products.push(productToAdd);
      } else {
        targetProduct.amount = targetProduct.amount + productToAdd.amount;
      }
      const totdalPriceToAdd =
        parseInt(productToAdd.price) * parseInt(productToAdd.amount);
      state.totalPrice = state.totalPrice + totdalPriceToAdd;
      state.totalAmount = state.totalAmount + parseInt(productToAdd.amount);
    },
    reducerOrRemove: (state, action) => {
      const targetId = action.payload.id; //product id

      const findExisting = state.products.findIndex((item) => {
        return item.id === targetId;
      });

      const targetProduct = state.products[findExisting];

      if (targetProduct.amount === 1) {
        state.products = state.products.filter((product) => {
          return product.id !== targetId;
        });
      } else if (targetProduct.amount > 1) {
        targetProduct.amount--;
      }

      const targetProductPrice = parseInt(targetProduct.price);
      state.totalPrice = state.totalPrice - targetProductPrice;
      state.totalAmount--;
    },
  },
});

export default cartSlice;

// The actions of the slice to be used / dispatched
const { actions } = cartSlice;
export const cartActions = actions;
