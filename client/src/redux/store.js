import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import productPreviewReducer from "./productPreviewSlice";
import singleProductReducer from "./singleProductSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    posts: productReducer,
    previewProducts: productPreviewReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
  },
});
