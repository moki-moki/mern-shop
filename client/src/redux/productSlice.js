import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getShowcaseProducts = createAsyncThunk(
  "products/getShowcaseProducts",
  async () => {
    return fetch("/api/products").then((res) => res.json());
  }
); //getShowcaseProducts is a thunk that returns by default 2 things pending and fulfilled

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
