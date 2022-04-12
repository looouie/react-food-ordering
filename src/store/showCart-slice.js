import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
  name: "showCart",
  initialState: {
    showCart: false,
  },
  reducers: {
    setShowCart: (state, action) => {
      state.showCart = true;
    },
    setHideCart: (state, action) => {
      state.showCart = false;
    },
  },
});

export default showCartSlice;
const { actions } = showCartSlice;
export const showCartActions = actions;
