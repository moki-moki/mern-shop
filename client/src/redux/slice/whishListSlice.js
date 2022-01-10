import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    list: [],
    qty: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.list.find((x) => x._id === item._id);
      if (existingItem) {
        state.list.map((x) => (x._id === existingItem._id ? item : x));
        state.qty -= 1;
      } else {
        state.list.push(item);
      }
      state.qty += 1;
    },

    removeItem: (state, { payload }) => {
      console.log(payload);
      const index = state.list.findIndex((item) => item._id === payload);

      if (index !== -1) {
        state.list.splice(index, 1);
        state.qty -= 1;
      }
    },
  },
});

export const { addItem, removeItem } = wishListSlice.actions;

export default wishListSlice.reducer;
