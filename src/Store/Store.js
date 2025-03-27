import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Features/CounterSlice";

const store = configureStore({
  reducer: {
    CounterSlice,
  },
});

export default store;
