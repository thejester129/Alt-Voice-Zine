import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigation/navigationSlice";

export default configureStore({
  reducer: {
    navigation: navigationSlice,
  },
});
