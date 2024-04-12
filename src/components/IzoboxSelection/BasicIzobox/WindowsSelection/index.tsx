import { RadioButtons } from "@components/RadioButtons";
import { useAppDispatch } from "@hooks/typedHooks";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { Windows } from "@store/izobox/interfaces";
import { chooseIzobox } from "@store/izobox/izoboxSlice";
import { useCallback, useMemo } from "react";

import { Container } from "./styled";

export const WindowsSelection = () => {
  const dispatch = useAppDispatch();

  const windows = useMemo(
    () =>
      Object.entries(Windows).map((window) => ({
        value: window[0],
        text: window[1],
      })),
    [],
  );

  const handleWindowChange = useCallback(
    (isWindow: Windows) =>
      Windows[isWindow as unknown as keyof typeof Windows] === Windows.with
        ? dispatch(chooseIzobox(IzoboxType.basic))
        : dispatch(chooseIzobox(IzoboxType.basicWithoutWindow)),
    [dispatch],
  );

  return (
    <Container>
      <RadioButtons values={windows} handleChange={handleWindowChange} />
    </Container>
  );
};
