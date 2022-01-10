import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginStart, loginSuccess, loginFail } from "./user/userReducers";

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

export const login = async (dispatch, user) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  dispatch(loginStart);
  try {
    const req = await fetch(`/api/auth/login`, postOptions);
    const data = await req.json();
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail());
  }
};

export const register = async (dispatch, user) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.username,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
    }),
  };
  try {
    const req = await fetch(`/api/auth/register`, postOptions);
    console.log(req);
    return req;
  } catch (error) {
    dispatch(loginFail());
  }
};
