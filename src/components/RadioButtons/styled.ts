import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1em;
  width: fit-content;
`;
export const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.2em;
  p:first-letter {
    text-transform: capitalize;
  }
`;
