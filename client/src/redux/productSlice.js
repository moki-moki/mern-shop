import { createSlice } from "@reduxjs/toolkit";
import { getShowcaseProducts } from "./thunk";

// get showcaseProducts
const productSlice = createSlice({
  name: "products",
  initialState: {
    product: [],
    loading: null,
  },
  extraReducers: {
    [getShowcaseProducts.pending]: (state) => {
      state.loading = "loading";
    },
    [getShowcaseProducts.fulfilled]: (state, { payload }) => {
      state.product = payload;
      state.loading = "success";
    },
    [getShowcaseProducts.rejected]: (state, action) => {
      state.loading = "fail";
    },
  },
});

export default productSlice.reducer;
