import { createSlice, createAction } from "@reduxjs/toolkit";

export const extraAction = createAction("extra/action");

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alerts: [],
  },
  reducers: {
    createAlert: (state, action) => {
      state.alerts.push({
        message: action.payload.message,
        type: action.payload.type,
      });
    },
  },
  extraReducers: {
    [extraAction]: (state, action) => {
      state.alerts.push({ message: action.error.messagege, type: "error" });
    },
  },
});

export const actions = alertSlice.actions;

export default alertSlice;
