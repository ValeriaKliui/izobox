import { FC } from "react";

import { ButtonProps } from "./interfaces";
import { ButtonStyled } from "./styled";

export const Button: FC<ButtonProps> = ({ children }) => (
  <ButtonStyled>{children}</ButtonStyled>
);
