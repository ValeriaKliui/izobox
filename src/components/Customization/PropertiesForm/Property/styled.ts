import styled from "styled-components";

export const Container = styled.div<{ $isOpened: boolean }>`
  padding: ${({ $isOpened }) => ($isOpened ? 0 : "1em")};
  cursor: pointer;
`;
export const TitleContainer = styled.div<{ $isOpened: boolean }>`
  background-color: ${({ $isOpened, theme: { colors } }) =>
    $isOpened ? colors.main : colors.white};
  padding: 0.8em 1em;
  border-radius: ${({ $isOpened, theme: { radiuses } }) =>
    !$isOpened && radiuses.big};
  border: 2px solid
    ${({ $isOpened, theme: { colors } }) =>
      !$isOpened ? colors.sub : colors.main};
  border-top-right-radius: ${({ theme: { radiuses } }) => radiuses.big};
  border-top-left-radius: ${({ theme: { radiuses } }) => radiuses.big};
  color: ${({ $isOpened, theme: { colors } }) =>
    $isOpened ? colors.white : colors.sub};
`;
