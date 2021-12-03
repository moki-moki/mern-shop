import { createSlice } from "@reduxjs/toolkit";
import { getShowcaseProducts } from "./thunk";

// get showcaseProducts
const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getShowcaseProducts.pending]: (state) => {
      state.status = "loading";
    },
    [getShowcaseProducts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getShowcaseProducts.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});

export default productSlice.reducer;
