// createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    IncrementCounter: (state, action) => {
      state.counter = state.counter + 1;
    },
    DecrementCounter: (state, action) => {
      if (state.counter !== 0) {
        state.counter = state.counter - 1;
      } else {
        state;
      }
    },
  },
});

export default counterSlice.reducer;
export const { IncrementCounter, DecrementCounter } = counterSlice.actions;
