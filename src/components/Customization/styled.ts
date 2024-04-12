import styled from "styled-components";

export const StagesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`;
export const Stages = styled.div`
  display: flex;
  gap: 1em;
`;
export const Stage = styled.div<{ $isCurrent: boolean }>`
  height: 1em;
  width: 3em;
  background-color: ${({ $isCurrent, theme: { colors } }) =>
    $isCurrent ? colors.main : colors.sub};
  border-radius: ${({ theme: { radiuses } }) => radiuses.big};
  cursor: pointer;
`;
export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6em;
`;
