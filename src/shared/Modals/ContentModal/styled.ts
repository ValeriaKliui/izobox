import ArrowSvg from "@assets/icons/arr.svg?react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;
`;
export const ImgContainer = styled.div`
  height: 600px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 100%;
`;
export const LeftArrow = styled(ArrowSvg)`
  transform: rotate(90deg);
  cursor: pointer;
`;
export const RightArrow = styled(ArrowSvg)`
  transform: rotate(-90deg);
  cursor: pointer;
`;
