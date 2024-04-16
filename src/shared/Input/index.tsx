import { FC, memo } from "react";

import { InputProps } from "./interfaces";
import { InputStyled } from "./styled";

export const Input: FC<InputProps> = memo(({ ...rest }) => (
  <InputStyled {...rest} />
));
