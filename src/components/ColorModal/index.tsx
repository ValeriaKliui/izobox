import { RadioButtons } from "@components/RadioButtons";
import { useAppDispatch, useAppSelector } from "@hooks/typedHooks";
import { useIzobox } from "@hooks/useIzobox";
import { closeColorModal, selectIsColorModalOpened } from "@store/app/appSlice";
import {
  chooseColorInside,
  chooseColorOutside,
} from "@store/izobox/basicIzobox";
import { useState } from "react";

import { ColorType } from "./interfaces";
import { Color, Colors, Container, Cross, Shadow, Top } from "./styled";

export const ColorModal = () => {
  const [choosenColor, setChoosenColor] = useState(null);
  const { izobox } = useIzobox();
  const { allColors } = izobox;
  const isColorModalOpened = useAppSelector(selectIsColorModalOpened);
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(closeColorModal());
  };
  const handleChange = (colorType: ColorType) => {
    if (ColorType[colorType] === ColorType.inside && choosenColor)
      dispatch(chooseColorInside(""));
    if (ColorType[colorType] === ColorType.outside && choosenColor)
      dispatch(chooseColorOutside(""));
    setChoosenColor(null);
  };
  const chooseColor = (color) => setChoosenColor(color);

  // console.log("colorOutside", colorOutside);
  return (
    <Shadow $isOpened={isColorModalOpened} onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Top>
          <div>
            <p className="bold">Выберите тип</p>
            <RadioButtons
              values={[
                { value: "inside", text: "Цвет внутри" },
                { value: "outside", text: "Цвет снаружи" },
              ]}
              handleChange={handleChange}
            />
          </div>
          <Cross onClick={onClose} />
        </Top>
        <Colors>
          {allColors?.map((color) => (
            <Color
              $color={color}
              key={color}
              onClick={() => chooseColor(color)}
            />
          ))}
        </Colors>
      </Container>
    </Shadow>
  );
};
