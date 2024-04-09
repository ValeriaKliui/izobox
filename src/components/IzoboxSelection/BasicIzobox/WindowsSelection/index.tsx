import { RadioButtons } from "@components/RadioButtons";
import { useAppDispatch } from "@hooks/typedHooks";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { Windows } from "@store/izobox/interfaces";
import { chooseIzobox } from "@store/izobox/izoboxSlice";

export const WindowsSelection = () => {
  const windows = Object.entries(Windows).map((window) => ({
    value: window[0],
    text: window[1],
  }));
  const dispatch = useAppDispatch();
  const handleWindowChange = (isWindow: Windows) =>
    Windows[isWindow as unknown as keyof typeof Windows] === Windows.with
      ? dispatch(chooseIzobox(IzoboxType.basic))
      : dispatch(chooseIzobox(IzoboxType.basicWithoutWindow));

  return <RadioButtons values={windows} handleChange={handleWindowChange} />;
};
