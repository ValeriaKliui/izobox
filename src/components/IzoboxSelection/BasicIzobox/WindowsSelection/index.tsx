import { RadioButtons } from "@components/RadioButtons";
import { useAppDispatch } from "@hooks/typedHooks";
import { chooseWindow } from "@store/izobox/basicIzobox";
import { Windows } from "@store/izobox/interfaces";

export const WindowsSelection = () => {
  const windows = Object.entries(Windows).map((window) => ({
    value: window[0],
    text: window[1],
  }));
  const dispatch = useAppDispatch();
  const handleWindowChange = (isWindow: Windows) =>
    dispatch(chooseWindow(isWindow));

  return <RadioButtons values={windows} handleChange={handleWindowChange} />;
};
