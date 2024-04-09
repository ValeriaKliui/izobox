import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "..";

interface AppState {
  isColorModalOpened: boolean;
  isPhotoModalOpened: boolean;
  clickedPhotoIndex: number;
}

export const appSlice = createSlice({
  name: "app",
  initialState: <AppState>{
    isColorModalOpened: false,
    isPhotoModalOpened: false,
    clickedPhotoIndex: 0,
  },
  reducers: {
    openColorModal: (state) => {
      state.isColorModalOpened = true;
    },
    closeColorModal: (state) => {
      state.isColorModalOpened = false;
    },
    openPhotoModal: (state) => {
      state.isPhotoModalOpened = true;
    },
    closePhotoModal: (state) => {
      state.isPhotoModalOpened = false;
    },
    choosePhotoIndex: (state, action: PayloadAction<number>) => {
      state.clickedPhotoIndex = action.payload;
    },
  },
});

export const {
  openColorModal,
  closeColorModal,
  openPhotoModal,
  closePhotoModal,
  choosePhotoIndex,
} = appSlice.actions;

export const selectIsColorModalOpened = (state: RootState) =>
  state.app.isColorModalOpened;
export const selectIsPhotoModalOpened = (state: RootState) =>
  state.app.isPhotoModalOpened;
export const selectPhotoIndexClicked = (state: RootState) =>
  state.app.clickedPhotoIndex;

export default appSlice.reducer;
