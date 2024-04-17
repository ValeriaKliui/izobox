import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  ${devices.lg} {
    gap: 2em !important;
  }
  ${devices.md} {
    text-align: center;
  }
`;
