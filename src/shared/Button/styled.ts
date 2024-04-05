import styled from "styled-components";

import { ButtonProps } from "./interfaces";

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${({ theme: { colors } }) => colors.dark};
  padding: 1em 2em;
  border: none;
  color: ${({ theme: { colors } }) => colors.white};
  border-radius: ${({ theme }) => theme.radiuses.big};
  text-transform: capitalize;
  width: fit-content;
`;
