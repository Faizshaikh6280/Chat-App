import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // | CONTACT | STARRED | SHARED
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSideber(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

export const { toggleSideber, updateSidebarType } = slice.actions;

export default slice.reducer;
