import { useAppDispatch, useAppSelector } from "@hooks/typedHooks";
import { ColorType } from "@shared/Modals/ColorModal/interfaces";
import {
  chooseColorInside,
  chooseColorOutside,
  selectColorInside,
  selectColorOutside,
} from "@store/izobox/izoboxSlice";
import { FC } from "react";

import { ColorInside, ColorOutside, ColorsProps } from "./interfaces";
import { Color, ColorsContainer, Container } from "./styled";

export const Colors: FC<ColorsProps> = ({ colors, title, colorType }) => {
  const dispatch = useAppDispatch();
  const colorInside = useAppSelector(selectColorInside);
  const colorOutside = useAppSelector(selectColorOutside);

  const choosenColor =
    colorType === ColorType.inside ? colorInside : colorOutside;

  const handleClick = (color: ColorInside | ColorOutside) => {
    if (colorType === ColorType.inside)
      dispatch(chooseColorInside(color as ColorInside));
    else dispatch(chooseColorOutside(color as ColorOutside));
  };

  if (
    colorType === ColorType.inside &&
    !colors.find((color) => color === colorInside) &&
    colorInside !== null
  )
    colors.push(colorInside);

  if (
    colorType === ColorType.outside &&
    !colors.find((color) => color === colorOutside) &&
    colorOutside !== null
  )
    colors.push(colorOutside);

  return (
    <Container>
      <p className="semibold">{title}</p>
      <ColorsContainer>
        {colors.map((color) => (
          <Color
            $color={color}
            $isChoosen={color === choosenColor}
            onClick={() => handleClick(color as ColorInside | ColorOutside)}
            key={color}
          />
        ))}
      </ColorsContainer>
    </Container>
  );
};
