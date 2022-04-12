import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import showCartSlice from "./showCart-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, showCart: showCartSlice.reducer },
});

export default store;
