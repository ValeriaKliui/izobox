import ArrowSvg from "@assets/icons/arr.svg?react";
import styled from "styled-components";

export const SecondArrow = styled(ArrowSvg)<{ $disabled: boolean }>`
  height: 50px;
  cursor: pointer;
  path {
    stroke-width: 3;
    stroke: ${({ $disabled, theme: { colors } }) =>
      $disabled ? colors.sub : colors.main};
  }
`;
export const FirstArrow = styled(SecondArrow)<{ $disabled: boolean }>`
  transform: rotate(180deg);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;
export const Container = styled.div<{ $height: number }>`
  max-height: ${({ $height }) => $height}px;
  overflow: hidden;
`;
export const Photos = styled.div<{ $gap: number; $scrollHeight: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap}px;
  transform: translateY(${({ $scrollHeight }) => $scrollHeight}px);
  transition: ${({ theme }) => theme.transition};
`;
export const Photo = styled.img`
  width: 70px;
  height: 70px;
`;
