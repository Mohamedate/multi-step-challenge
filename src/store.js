import { configureStore } from "@reduxjs/toolkit";
import planInfoReducer from "./features/planSlice";

const store = configureStore({
  reducer: {
    planInfo: planInfoReducer,
  },
});

export default store;
