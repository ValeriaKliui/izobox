import { theme, Theme } from "@providers/Theme";
import styled from "styled-components";

import { ButtonStyledProps } from "./interfaces";

const defineButtonBgColor = (props: ButtonStyledProps) => {
  const { colors } = theme;
  const { $choosen, $sub } = props;

  if ($choosen === false) return colors.background;
  if ($choosen) return colors.main;
  if ($sub) return colors.white;
  return colors.dark;
};

const defineButtonColor = (props: ButtonStyledProps) => {
  const { colors } = theme;
  const { $choosen, $sub } = props;

  if ($choosen === false || $sub) return colors.dark;
  if ($choosen) return colors.white;
  return colors.white;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: ${({ $choosen, $sub }) =>
    defineButtonBgColor({ $choosen, $sub })};
  padding: 1em 2em;
  border: none;
  color: ${({ $choosen, $sub }) => defineButtonColor({ $choosen, $sub })};
  border-radius: ${({ theme }) => theme.radiuses.big};
  text-transform: capitalize;
  border: 2px solid
    ${({ $sub, theme: { colors } }) => ($sub ? colors.dark : "inherit")};
  width: fit-content;
  min-width: ${({ $choosen }) =>
    typeof $choosen !== "undefined" ? "inherit" : "200px"};
  cursor: pointer;
`;
