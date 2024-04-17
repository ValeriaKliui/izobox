import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1em;
  ${devices.md} {
    flex-direction: column;
  }
`;
