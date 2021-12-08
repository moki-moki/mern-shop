import { createSlice } from "@reduxjs/toolkit";
import { getSingleProduct } from "./thunk";

const singleProdctSlice = createSlice({
  name: "singleProduct",
  initialState: {
    list: {},
    status: null,
  },
  extraReducers: {
    [getSingleProduct.pending]: (state) => {
      state.status = "loading";
    },
    [getSingleProduct.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});

export default singleProdctSlice.reducer;
