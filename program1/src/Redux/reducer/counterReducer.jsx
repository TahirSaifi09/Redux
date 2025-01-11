import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    dicrement:(state,action) => {
        state.value = state.value - 1;
    },
  },
});

export const { increment, dicrement } = counterSlice.actions;
export default counterSlice.reducer;
