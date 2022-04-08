import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducers: { cart: cartSlice.reducer },
});

export default store;
