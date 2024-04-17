import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  grid-row-start: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${devices.xs} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
  }
`;
export const Options = styled.div`
  border-radius: ${({ theme: { radiuses } }) => radiuses.big};
  overflow: hidden;
  width: fit-content;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15);
`;
export const Option = styled.button<{ $isChoosen: boolean }>`
  padding: 0.6em 2em;
  cursor: pointer;
  color: ${({ $isChoosen, theme: { colors } }) =>
    $isChoosen ? colors.white : colors.dark};
  background-color: ${({ $isChoosen, theme: { colors } }) =>
    $isChoosen ? colors.main : colors.white};
  outline: unset;
  border: unset;
`;
