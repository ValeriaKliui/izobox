import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3em;
  ${devices.md} {
    flex-direction: column;
    gap: 2em;
  }
`;
export const Dimensions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 0.5em 1em;
`;
export const StyledLi = styled.li`
  list-style-type: disc;
  &::marker {
    color: ${({ theme: { colors } }) => colors.main};
    font-size: 1.5em;
  }
`;
export const Title = styled.h5`
  margin-bottom: 1.5em;
  ${devices.md} {
    margin-bottom: 0.5em;
  }
`;
