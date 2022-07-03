import { createSlice } from "@reduxjs/toolkit";

export const navigation = createSlice({
  name: "navigation",
  initialState: {
    prevRoute: "",
    currentRoute: "",
  },
  reducers: {
    setCurrentRoute: (state, action) => {
      state.prevRoute = state.currentRoute;
      state.currentRoute = action.payload;
    },
  },
});

export const { setCurrentRoute } = navigation.actions;

export default navigation.reducer;
