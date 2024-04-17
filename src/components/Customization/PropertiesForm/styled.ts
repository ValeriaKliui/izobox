import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.main};
  width: 25em;
  border-radius: ${({ theme: { radiuses } }) => radiuses.big};
  ${devices.xs} {
    width: 100%;
  }
`;
export const Content = styled.div<{ $isOpened: boolean }>`
  padding: ${({ $isOpened }) => ($isOpened ? "1em" : 0)};
  visibility: ${({ $isOpened }) => ($isOpened ? "visible" : "hidden")};
  height: ${({ $isOpened }) => ($isOpened ? "100%" : 0)};
`;
