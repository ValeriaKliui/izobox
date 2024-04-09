import CrossSvg from "@assets/icons/cross.svg?react";
import styled from "styled-components";

export const Shadow = styled.div<{ $isOpened: boolean }>`
  width: ${({ $isOpened }) => ($isOpened ? "100%" : 0)};
  height: ${({ $isOpened }) => ($isOpened ? "100vh" : 0)};
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: ${({ $isOpened }) => ($isOpened ? 0 : "-100%")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  padding: 1em;
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
`;
export const Colors = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1em;
  overflow-y: auto;
  max-height: 500px;
  padding: 1em;
  margin-top: 1em;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme: { colors } }) => colors.main};
    border-radius: ${({ theme: { radiuses } }) => radiuses.small};
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme: { colors } }) => colors.secondary};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    background-clip: padding-box;
    cursor: pointer;
  }
`;
export const Color = styled.div<{ $color: string; $isChoosen: boolean }>`
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  background: ${({ $color }) => $color};
  width: 120px;
  height: 70px;
  cursor: pointer;
  outline: 3px solid
    ${({ $isChoosen, theme: { colors } }) =>
      $isChoosen ? colors.main : "unset"};
  outline-offset: 2px;
  box-shadow: 0 1px 5px 0 rgba(0, 53, 133, 0.25);
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Cross = styled(CrossSvg)`
  cursor: pointer;
`;
