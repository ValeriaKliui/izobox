import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "..";
import { BasicIzoboxState, Windows } from "./interfaces";

export const basicIzoboxSlice = createSlice({
  name: "basicIzobox",
  initialState: <BasicIzoboxState>{
    window: Windows.with,
    extraOptions: [],
  },
  reducers: {
    chooseWindow: (state, action: PayloadAction<Windows>) => {
      state.window = action.payload;
    },
    addExtraOption: (state, action: PayloadAction<number>) => {
      state.extraOptions = [...state.extraOptions, action.payload];
    },
    removeExtraOption: (state, action: PayloadAction<number>) => {
      state.extraOptions = state.extraOptions.filter(
        (optionNum) => optionNum !== action.payload,
      );
    },
  },
});

export const { chooseWindow, addExtraOption, removeExtraOption } =
  basicIzoboxSlice.actions;

export const selectIsWindow = (state: RootState) => state.basicIzobox.window;
export const selectExtraOptions = (state: RootState) =>
  state.basicIzobox.extraOptions;

export default basicIzoboxSlice.reducer;
