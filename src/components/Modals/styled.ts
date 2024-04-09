import CrossSvg from "@assets/icons/cross.svg?react";
import styled from "styled-components";

export const Shadow = styled.div<{ $isOpened: boolean }>`
  width: ${({ $isOpened }) => ($isOpened ? "100%" : 0)};
  height: ${({ $isOpened }) => ($isOpened ? "100vh" : 0)};
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: ${({ $isOpened }) => ($isOpened ? 0 : "-100%")};
  top: ${({ $isOpened }) => ($isOpened ? 0 : "-100%")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  padding: 1em;
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  display: flex;
  flex-direction: column;
`;
export const Cross = styled(CrossSvg)`
  cursor: pointer;
  align-self: flex-end;
  margin: 0.5em;
`;
