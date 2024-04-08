import {
  ColorInside,
  ColorOutside,
} from "@components/IzoboxSelection/BasicIzobox/Colors/interfaces";
import { IZOBOXES } from "@constants/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "..";
import { BasicIzoboxState, Windows } from "./interfaces";

export const basicIzoboxSlice = createSlice({
  name: "basicIzobox",
  initialState: <BasicIzoboxState>{
    window: Windows.with,
    colorInside: IZOBOXES.basic.colorsInside[0],
    colorOutside: IZOBOXES.basic.colorsOutside[0],
    extraOptions: [],
  },
  reducers: {
    chooseWindow: (state, action: PayloadAction<Windows>) => {
      state.window = action.payload;
    },
    chooseColorInside: (state, action: PayloadAction<ColorInside>) => {
      state.colorInside = action.payload;
    },
    chooseColorOutside: (state, action: PayloadAction<ColorOutside>) => {
      state.colorOutside = action.payload;
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

export const {
  chooseWindow,
  chooseColorInside,
  chooseColorOutside,
  addExtraOption,
  removeExtraOption,
} = basicIzoboxSlice.actions;

export const selectIsWindow = (state: RootState) => state.basicIzobox.window;
export const selectColorInside = (state: RootState) =>
  state.basicIzobox.colorInside;
export const selectColorOutside = (state: RootState) =>
  state.basicIzobox.colorOutside;
export const selectExtraOptions = (state: RootState) =>
  state.basicIzobox.extraOptions;

export default basicIzoboxSlice.reducer;
