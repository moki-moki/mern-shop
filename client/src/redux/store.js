import productReducer from "../redux/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import productPreviewReducer from "./productPreviewSlice";

export default configureStore({
  reducer: {
    posts: productReducer,
    previewProducts: productPreviewReducer,
  },
});
