import {
  ColorInside,
  ColorOutside,
} from "@components/IzoboxSelection/BasicIzobox/Colors/interfaces";
import { RadioButtons } from "@components/RadioButtons";
import { useAppDispatch, useAppSelector } from "@hooks/typedHooks";
import { useIzobox } from "@hooks/useIzobox";
import {
  chooseColorInside,
  chooseColorOutside,
  selectColorInside,
  selectColorOutside,
} from "@store/izobox/izoboxSlice";
import { useState } from "react";

import { ColorType } from "./interfaces";
import { Color, Colors, Top } from "./styled";

export const ColorModal = () => {
  const dispatch = useAppDispatch();
  const colorInside = useAppSelector(selectColorInside);
  const colorOutside = useAppSelector(selectColorOutside);
  const { izobox } = useIzobox();
  const { allColors } = izobox;

  const [colorType, setColorType] = useState(ColorType.inside);

  const handleChange = (colorType: ColorType) => {
    setColorType(colorType);
  };

  const chooseColor = (color: ColorInside | ColorOutside) => {
    if (colorType === ColorType.inside) {
      dispatch(chooseColorInside(color as ColorInside));
    }
    if (colorType === ColorType.outside) {
      dispatch(chooseColorOutside(color as ColorOutside));
    }
  };

  return (
    <>
      <Top>
        <p className="bold">Выберите тип</p>
        <RadioButtons
          values={[
            { value: ColorType.inside, text: "Цвет внутри" },
            { value: ColorType.outside, text: "Цвет снаружи" },
          ]}
          handleChange={handleChange}
        />
      </Top>
      <Colors>
        {allColors?.map((color: ColorInside | ColorOutside) => (
          <Color
            key={color}
            onClick={() => chooseColor(color)}
            $color={color}
            $isChoosen={
              (colorType === ColorType.inside && color === colorInside) ||
              (colorType === ColorType.outside && color === colorOutside)
            }
          />
        ))}
      </Colors>
    </>
  );
};
