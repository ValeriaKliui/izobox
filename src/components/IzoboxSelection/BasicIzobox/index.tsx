import { PATHS } from "@constants/paths";
import { useAppDispatch } from "@hooks/typedHooks";
import { useIzobox } from "@hooks/useIzobox";
import { Button } from "@shared/Button";
import { Colors } from "@shared/Colors";
import { ColorType } from "@shared/Modals/ColorModal/interfaces";
import { openColorModal } from "@store/app/appSlice";
import { Link } from "react-router-dom";

import { FlexGap } from "../styled";
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
      <FlexGap>
        <Link to={PATHS.ORDER}>
          <Button>Купить</Button>
        </Link>
        <Button sub>В кредит</Button>
      </FlexGap>
    </>
  );
};
