import { FC, memo } from "react";

import { ButtonProps } from "./interfaces";
import { ButtonStyled } from "./styled";

export const Button: FC<ButtonProps> = memo(
  ({ children, choosen, sub, ...rest }) => {
    const textCapitalized = children
      ?.trim()
      .split(" ")
      .map((word, index) =>
        index === 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : word,
      )
      .join(" ");

    return (
      <ButtonStyled $choosen={choosen} $sub={sub} {...rest}>
        {textCapitalized}
      </ButtonStyled>
    );
  },
);
