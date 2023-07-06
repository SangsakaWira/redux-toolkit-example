import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: {
    value: {
      count: 0
    }
  },
  reducers: {
    addAngka: (state, action) => {
      state.value.count = state.value.count + action.payload;
    },
    subAngka: (state, action) => {
      state.value.count = state.value.count - action.payload;
    }
  }
});

export const { addAngka, subAngka } = countSlice.actions;

export default countSlice.reducer;
