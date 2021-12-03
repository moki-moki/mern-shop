import { createAsyncThunk } from "@reduxjs/toolkit";

export const getShowcaseProducts = createAsyncThunk(
  "products/getShowcaseProducts",
  async () => {
    return fetch("/api/products").then((res) => res.json());
  }
); //getShowcaseProducts is a thunk that returns by default 2 things pending and fulfilled

export const getProductPreview = createAsyncThunk(
  "previewProducts/getProductPreview",
  async () => {
    return fetch("/api/products/allProducts").then((res) => res.json());
  }
);
