import { FC } from "react";

import { ButtonProps } from "./interfaces";
import { ButtonStyled } from "./styled";

export const Button: FC<ButtonProps> = ({ children, choosen, sub, ...rest }) => (
  <ButtonStyled $choosen={choosen} $sub={sub} {...rest}>{children}</ButtonStyled>
);
