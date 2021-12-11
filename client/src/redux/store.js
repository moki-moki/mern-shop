import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import productPreviewReducer from "./productPreviewSlice";
import singleProductReducer from "./singleProductSlice";
import cartReducer from "./cartSlice";
import alertSlice from "./alertSlice";

export default configureStore({
  reducer: {
    posts: productReducer,
    previewProducts: productPreviewReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    alert: alertSlice.reducer,
  },
});
