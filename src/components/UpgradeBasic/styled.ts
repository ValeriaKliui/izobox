import styled from "styled-components";
import ArrowSvg from "@assets/icons/arr.svg?react";

export const TitleContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  cursor: pointer;
`;

export const Arrow = styled(ArrowSvg)<{ $isShown: boolean }>`
  transform: ${({ $isShown }) => ($isShown ? "rotate(180deg)" : "unset")};
`;
export const Option = styled.div`
  padding: 1em 2em;
  border-radius: ${({ theme: { radiuses } }) => radiuses.big};
`;
