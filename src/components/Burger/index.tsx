import { FC } from "react";

import { BurgerProps } from "./interfaces";
import { BurgerLine, Container } from "./styled";

export const Burger: FC<BurgerProps> = ({ onClick, isOpened }) => (
  <Container onClick={onClick}>
    {Array(3)
      .fill(1)
      .map((_, index) => (
        <BurgerLine key={index} $isOpened={isOpened} />
      ))}
  </Container>
);
