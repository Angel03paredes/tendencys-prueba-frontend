import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productSlice"

export const store = configureStore({
  reducer: {
    products:productsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});