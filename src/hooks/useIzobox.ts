import { IZOBOXES } from "@constants/index";
import {
  IzoboxContextType,
  IzoboxType,
} from "@providers/IzoboxProvider/interfaces";
import { chooseIzobox, selectIzobox } from "@store/izobox/izoboxSlice";
import { useCallback, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "./typedHooks";

export const useIzobox = () => {
  const izoboxType = useAppSelector(selectIzobox);
  const dispatch = useAppDispatch();

  const chooseIzoboxType = useCallback(
    (izobox: IzoboxType) => {
      dispatch(chooseIzobox(izobox));
    },
    [dispatch],
  );

  const value: IzoboxContextType = useMemo(
    () => ({ izobox: IZOBOXES[izoboxType], chooseIzobox: chooseIzoboxType }),
    [izoboxType, chooseIzoboxType],
  );

  return value;
};
