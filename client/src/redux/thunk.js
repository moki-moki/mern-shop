import { createAsyncThunk } from "@reduxjs/toolkit";

export const getShowcaseProducts = createAsyncThunk(
  "products/getShowcaseProducts",
  async () => {
    return fetch("/api/products").then((res) => res.json());
  }
);

export const getProductPreview = createAsyncThunk(
  "previewProducts/getProductPreview",
  async () => {
    return fetch("/api/products/allProducts").then((res) => res.json());
  }
);

export const getSingleProduct = createAsyncThunk(
  "singleProduct/getSingleProduct",
  async (id) => {
    return fetch(`/api/products/${id}`).then((res) => res.json());
  }
);
