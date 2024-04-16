import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1em;
  ${devices.md} {
    align-self: center;
  }
`;
