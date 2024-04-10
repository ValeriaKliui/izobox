import { IZOBOXES } from "@constants/index";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorInside, ColorOutside } from "@shared/Colors/interfaces";

import { RootState } from "..";
import { IzoboxState } from "./interfaces";

export const izoboxSlice = createSlice({
  name: "izobox",
  initialState: <IzoboxState>{
    type: IzoboxType.basic,
    colorInside: IZOBOXES.basic.colorsInside[0],
    colorOutside: IZOBOXES.basic.colorsOutside[0],
  },
  reducers: {
    chooseIzobox: (state, action: PayloadAction<IzoboxType>) => {
      state.type = action.payload;
    },
    chooseColorInside: (state, action: PayloadAction<ColorInside>) => {
      state.colorInside = action.payload;
    },
    chooseColorOutside: (state, action: PayloadAction<ColorOutside>) => {
      state.colorOutside = action.payload;
    },
    resetColorsChoosen: (state) => {
      state.colorInside = null;
      state.colorOutside = null;
    },
  },
});

export const {
  chooseIzobox,
  chooseColorInside,
  chooseColorOutside,
  resetColorsChoosen,
} = izoboxSlice.actions;

export const selectIzobox = (state: RootState) => state.izobox.type;
export const selectColorOutside = (state: RootState) =>
  state.izobox.colorOutside;
export const selectColorInside = (state: RootState) => state.izobox.colorInside;

export default izoboxSlice.reducer;
