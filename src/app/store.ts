import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Define the type of the root state based on the reducer's keys and the types of their corresponding states
export type RootState = ReturnType<typeof store.getState>;
