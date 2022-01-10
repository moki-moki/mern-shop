import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import productPreviewReducer from "./slice/productPreviewSlice";
import singleProductReducer from "./slice/singleProductSlice";
import cartReducer from "./slice/cartSlice";
import alertSlice from "./slice/alertSlice";
import whishListReducer from "./slice/whishListSlice";
import userReducer from "./user/userReducers";

export default configureStore({
  reducer: {
    posts: productReducer,
    previewProducts: productPreviewReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    alert: alertSlice.reducer,
    wishList: whishListReducer,
    user: userReducer,
  },
});
