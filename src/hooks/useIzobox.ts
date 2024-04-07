import { IZOBOXES } from "@constants/index";
import {
  Izobox,
  IzoboxContextType,
  IzoboxType,
} from "@providers/IzoboxProvider/interfaces";
import { useCallback, useMemo, useState } from "react";

export const useIzobox = () => {
  const [choosenIzobox, setChoosenIzobox] = useState<Izobox>(IZOBOXES.basic);

  const chooseIzobox = useCallback(
    (izobox: IzoboxType) => () =>
      izobox === IzoboxType.basic
        ? setChoosenIzobox(IZOBOXES.basic)
        : setChoosenIzobox(IZOBOXES.pro),
    [],
  );

  const value: IzoboxContextType = useMemo(
    () => ({ izobox: choosenIzobox, chooseIzobox }),
    [choosenIzobox.type],
  );

  return value;
};
