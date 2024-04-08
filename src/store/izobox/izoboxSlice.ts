import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "..";
import { IzoboxState } from "./interfaces";

export const izoboxSlice = createSlice({
  name: "izobox",
  initialState: <IzoboxState>{
    type: IzoboxType.basic,
  },
  reducers: {
    chooseIzobox: (state, action: PayloadAction<IzoboxType>) => {
      state.type = action.payload;
    },
  },
});

export const { chooseIzobox } = izoboxSlice.actions;

export const selectIzobox = (state: RootState) => state.izobox.type;

export default izoboxSlice.reducer;
