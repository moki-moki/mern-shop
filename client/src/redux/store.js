import productReducer from "../redux/productSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    posts: productReducer,
  },
});
