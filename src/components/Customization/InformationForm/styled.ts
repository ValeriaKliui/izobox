import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: column;
  gap: 1em 3em;
  margin: 1em 0;
  ${devices.md} {
    grid-template-columns: repeat(1, min-content);
    grid-auto-flow: row;
  }
`;
