import { useAppDispatch } from "@hooks/typedHooks";
import { useIzobox } from "@hooks/useIzobox";
import { Colors } from "@shared/Colors";
import { ColorType } from "@shared/Modals/ColorModal/interfaces";
import { openColorModal } from "@store/app/appSlice";

import { ColorsContainer, Container } from "./styled";

export const ColorsPicker = () => {
  const { izobox } = useIzobox();
  const dispatch = useAppDispatch();
  const onAllColorsClick = () => dispatch(openColorModal());

  return (
    <>
      <p>Выбери цвет и тип декора</p>
      <Container>
        <ColorsContainer>
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
        </ColorsContainer>
        <p className="bold underline pointer" onClick={onAllColorsClick}>
          Все цвета
        </p>
      </Container>
    </>
  );
};
