import styled from "styled-components";

export const NavList = styled.div<{ $isVertical?: boolean }>`
  display: flex;
  gap: 2em;
  flex-direction: ${({ $isVertical }) => ($isVertical ? "column" : "row")};
`;
