import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const item = action.payload;
      const existingItem = state.products.find((x) => x._id === item._id);
      if (existingItem) {
        state.products.map((x) => (x._id === existingItem._id ? item : x));
        state.quantity -= 1;
        state.total = state.total;
      } else {
        state.products.push(item);
      }
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },

    updateQty: (state, { payload }) => {
      const { _id, quantity } = payload;
      if (quantity >= 0) {
        const index = state.products.findIndex((item) => item._id === _id);
        if (index !== -1) {
          state.products[index].quantity = quantity;
        }
      }
    },

    removeItem: (state, { payload }) => {
      const index = state.products.findIndex((item) => item._id === payload);
      if (index !== -1) {
        state.products.splice(index, 1);
        state.quantity -= 1;
        state.total += payload.price * payload.quantity;
      }
    },
  },
});

export const { addProduct, updateQty, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
