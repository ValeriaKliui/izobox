import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div<{ $isOpened: boolean }>`
  padding: 2em;
  position: fixed;
  width: ${({ $isOpened }) => ($isOpened ? "100vw" : 0)};
  height: ${({ $isOpened }) => ($isOpened ? "100vh" : 0)};
  background-color: ${({ theme: { colors } }) => colors.white};
  display: ${({ $isOpened }) => ($isOpened ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
`;
export const ContactsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${devices.xs} {
    flex-direction: column;
    gap: 2em;
  }
`;
