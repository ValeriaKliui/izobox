import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "..";

interface AppState {
  isColorModalOpened: boolean;
}

export const appSlice = createSlice({
  name: "app",
  initialState: <AppState>{
    isColorModalOpened: false,
  },
  reducers: {
    openColorModal: (state) => {
      state.isColorModalOpened = true;
    },
    closeColorModal: (state) => {
      state.isColorModalOpened = false;
    },
  },
});

export const { openColorModal, closeColorModal } = appSlice.actions;

export const selectIsColorModalOpened = (state: RootState) =>
  state.app.isColorModalOpened;

export default appSlice.reducer;
