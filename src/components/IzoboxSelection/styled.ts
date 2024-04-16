import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const IzoboxContainer = styled.div`
  display: flex;
  ${devices.lg} {
    flex-direction: column;
    align-items: center;
  }
  ${devices.md} {
    gap: 2em;
  }
`;
export const Gallery = styled.div`
  display: flex;
  ${devices.md} {
    flex-direction: column-reverse;
  }
`;
export const Properties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  ${devices.lg} {
    width: 100%;
  }
`;
export const FlexGap = styled.div`
  display: flex;
  gap: 1em;
`;
export const Type = styled.span`
  text-transform: capitalize;
  display: inline-block;
`;
