import { configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navSlice'

export let store = configureStore({
  reducer: {
    nav: navReducer,
  },
})