import { ColorType } from "@components/ColorModal/interfaces";
import { useAppDispatch } from "@hooks/typedHooks";
import { useIzobox } from "@hooks/useIzobox";
import { openColorModal } from "@store/app/appSlice";

import { Colors } from "./Colors";
import { TotalPrice } from "./TotalPrice";
import { WindowsSelection } from "./WindowsSelection";

export const BasicIzobox = () => {
  const dispatch = useAppDispatch();
  const { izobox } = useIzobox();

  const onAllColorsClick = () => dispatch(openColorModal());

  return (
    <>
      <WindowsSelection />
      <Colors
        colors={izobox.colorsInside}
        title="Цвет внутри"
        colorType={ColorType.inside}
      />
      <Colors
        colors={izobox.colorsOutside}
        title="Цвет снаружи"
        colorType={ColorType.outside}
      />
      <p className="bold underline pointer" onClick={onAllColorsClick}>
        Все цвета
      </p>
      <TotalPrice />
    </>
  );
};
