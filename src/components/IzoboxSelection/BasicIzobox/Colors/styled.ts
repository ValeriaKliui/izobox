import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const ColorsContainer = styled.div`
  display: flex;
  gap: 0.5em;
`;
export const Color = styled.div<{ $color: string; $isChoosen: boolean }>`
  width: 40px;
  height: 40px;
  background-color: ${({ $color }) => $color};
  cursor: pointer;
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  outline: 2px solid
    ${({ $isChoosen, theme: { colors } }) =>
      $isChoosen ? colors.main : "unset"};
  outline-offset: 2px;
`;
