import ArrowSvg from "@assets/icons/arr.svg?react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Img = styled.img`
  min-height: 300px;
`;
export const LeftArrow = styled(ArrowSvg)`
  transform: rotate(90deg);
  cursor: pointer;
`;
export const RightArrow = styled(ArrowSvg)`
  transform: rotate(-90deg);
  cursor: pointer;
`;
