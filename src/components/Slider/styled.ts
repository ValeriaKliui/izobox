import ArrowSvg from "@assets/icons/arr.svg?react";
import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  ${devices.md} {
    flex-direction: row !important;
  }
`;
export const Container = styled.div<{ $height: number }>`
  max-height: ${({ $height }) => $height}px;
  overflow: hidden;
  ${devices.md} {
    max-height: unset;
    max-width: ${({ $height }) => $height}px;
  }
`;
export const Photos = styled.div<{ $gap: number; $scrollHeight: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap}px;
  transform: translateY(${({ $scrollHeight }) => $scrollHeight}px);
  transition: ${({ theme }) => theme.transition};
  ${devices.md} {
    flex-direction: row;
    transform: translateX(${({ $scrollHeight }) => $scrollHeight}px);
  }
`;
export const Photo = styled.img`
  width: 70px;
  height: 70px;
  border: 3px solid transparent;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme: { colors } }) => colors.main};
  }
`;
export const SecondArrow = styled(ArrowSvg)<{ $disabled: boolean }>`
  height: 50px;
  cursor: pointer;
  path {
    stroke-width: 3;
    stroke: ${({ $disabled, theme: { colors } }) =>
      $disabled ? colors.sub : colors.main};
  }
  ${devices.md} {
    transform: rotate(-90deg);
  }
`;
export const FirstArrow = styled(SecondArrow)<{ $disabled: boolean }>`
  transform: rotate(90deg);
`;
