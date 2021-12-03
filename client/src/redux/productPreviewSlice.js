import { createSlice } from "@reduxjs/toolkit";
import { getProductPreview } from "./thunk";

// get showcaseProducts
const productPreviewSlice = createSlice({
  name: "previewProducts",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getProductPreview.pending]: (state) => {
      state.status = "loading";
    },
    [getProductPreview.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getProductPreview.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});

export default productPreviewSlice.reducer;
