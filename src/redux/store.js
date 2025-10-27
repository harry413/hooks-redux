import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import goldReducer from "./goldSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    gold: goldReducer,
  },
});