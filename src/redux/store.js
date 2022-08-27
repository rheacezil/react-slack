import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/appSlices";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
