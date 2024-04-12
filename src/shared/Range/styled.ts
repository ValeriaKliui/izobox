import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1em;
`;
export const DimensionsContainer = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;
export const RangeStyled = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background: ${({ theme: { colors } }) => colors.sub};
    height: 0.2em;
    border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -6px;
    background-color: ${({ theme: { colors } }) => colors.main};
    height: 1em;
    width: 1em;
    border-radius: ${({ theme: { radiuses } }) => radiuses.big};
  }
  &:focus::-webkit-slider-thumb {
    outline: 3px solid ${({ theme: { colors } }) => colors.main};
    outline-offset: 0.125em;
  }
`;

export const DimensionInput = styled.input`
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  border: 1px solid ${({ theme: { colors } }) => colors.sub};
  outline: none;
  width: 3em;
  color: ${({ theme: { colors } }) => colors.dark};
  text-align: center;
`;
export const PropertiesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
