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
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  };

  await dispatch(loginStart());
  try {
    const req = await fetch(`/api/auth/login`, postOptions);
    const data = await req.json();

    // save user in local
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
    }

    await dispatch(loginSuccess(data));
  } catch (error) {
    await dispatch(loginFail(error));
  }
};

export const register = async (dispatch, user) => {
  console.log(user);
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
