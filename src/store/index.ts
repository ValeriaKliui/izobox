import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./app/appSlice";
import bazicIzoboxReducer from "./izobox/basicIzobox";
import izoboxReducer from "./izobox/izoboxSlice";

export const store = configureStore({
  reducer: {
    izobox: izoboxReducer,
    app: appReducer,
    basicIzobox: bazicIzoboxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
