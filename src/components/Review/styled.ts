import quoteImg from "@assets/icons/quote.svg";
import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
  margin-top: 3em;
`;
export const Container = styled.div`
  display: flex;
  gap: 4em;
  align-items: center;
  ${devices.lg} {
    padding-top: 2em;
  }
  ${devices.md} {
    flex-direction: column;
    gap: 0;
  }
`;
export const ReviewContainer = styled.div`
  position: relative;
  &::before {
    content: url(${quoteImg});
    position: absolute;
    display: block;
    top: -15px;
    left: -50px;
    ${devices.lg} {
      left: -40px;
    }
  }
  &::after {
    content: url(${quoteImg});
    transform: rotate(180deg);
    position: absolute;
    display: block;
    bottom: 50px;
    right: 0;
    ${devices.lg} {
      bottom: 80px;
    }
  }
  ${devices.lg} {
    padding: 2em 0;
  }
  ${devices.md} {
    &::before,
    &::after {
      transform: scale(-0.7);
    }
  }
`;
export const Author = styled.div`
  display: flex;
  gap: 1em;
`;
export const Avatar = styled.img`
  border-radius: 100%;
`;
export const Image = styled.img`
  max-height: 220px;
  transform: translateY(-57px) scale(1.5);
  ${devices.lg} {
    max-height: 160px;
    transform: translateY(-9px) scale(1.5);
  }
  ${devices.lg} {
    display: none;
  }
`;
