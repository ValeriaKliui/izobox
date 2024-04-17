import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  width: 2em;
  height: 1.5em;
  display: none;
  ${devices.md} {
    display: block;
    position: relative;
    z-index: 1000;
    cursor: pointer;
  }
`;
export const BurgerLine = styled.span<{ $isOpened: boolean }>`
  display: block;
  height: 2px;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.dark};
  border-radius: ${({ theme: { radiuses } }) => radiuses.big};
  margin-bottom: 6px;

  &:first-child {
    transform: ${({ $isOpened }) =>
      $isOpened ? "rotate(45deg) translate(5px, 5px)" : "none"};
  }
  &:nth-child(2) {
    display: ${({ $isOpened }) => ($isOpened ? "none" : "block")};
  }
  &:last-child {
    transform: ${({ $isOpened }) => ($isOpened ? "rotate(-45deg)" : "none")};
  }
`;
