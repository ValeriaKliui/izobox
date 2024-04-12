import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "..";

interface AppState {
  isColorModalOpened: boolean;
  isContentModalOpened: boolean;
  clickedContentIndex: number;
  contentSrc: string[];
}

export const appSlice = createSlice({
  name: "app",
  initialState: <AppState>{
    isColorModalOpened: false,
    isContentModalOpened: false,
    clickedContentIndex: 0,
    contentSrc: [],
  },
  reducers: {
    openColorModal: (state) => {
      state.isColorModalOpened = true;
    },
    closeColorModal: (state) => {
      state.isColorModalOpened = false;
    },
    openContentModal: (state) => {
      state.isContentModalOpened = true;
    },
    closeContentModal: (state) => {
      state.isContentModalOpened = false;
    },
    chooseContentIndex: (state, action: PayloadAction<number>) => {
      state.clickedContentIndex = action.payload;
    },
    chooseContentSrc: (state, action: PayloadAction<string[]>) => {
      state.contentSrc = action.payload;
    },
  },
});

export const {
  openColorModal,
  closeColorModal,
  openContentModal,
  closeContentModal,
  chooseContentIndex,
  chooseContentSrc,
} = appSlice.actions;

export const selectIsColorModalOpened = (state: RootState) =>
  state.app.isColorModalOpened;
export const selectIsContentModalOpened = (state: RootState) =>
  state.app.isContentModalOpened;
export const selectContentIndexClicked = (state: RootState) =>
  state.app.clickedContentIndex;
export const selectContentSrc = (state: RootState) => state.app.contentSrc;

export default appSlice.reducer;
