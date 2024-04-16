import ArrowSvg from "@assets/icons/arr.svg?react";
import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  cursor: pointer;
  ${devices.md} {
    margin-bottom: 1em;
  }
`;

export const Arrow = styled(ArrowSvg)<{ $isShown: boolean }>`
  cursor: pointer;
  transform: ${({ $isShown }) => ($isShown ? "rotate(180deg)" : "unset")};
  transition: ${({ theme }) => theme.transition};
  &:hover {
    transform: rotate(180deg);
  }
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-top: 2em;
`;
export const Option = styled.div`
  padding: 1em 2em;
  border-radius: ${({ theme: { radiuses } }) => radiuses.big};
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  gap: 1em 2em;
  box-shadow: 0 1px 24px -1px rgba(0, 0, 0, 0.1);
  ${devices.lg} {
    grid-template-columns: 0.5fr 2fr 0.5fr;
  }
  ${devices.md} {
    grid-template-columns: 1fr;
    justify-items: start;
  }
`;
export const OptionTitle = styled.div`
  ${devices.md} {
    display: flex;
    cursor: pointer;
    align-items: center;
  }
`;
export const OptionArrow = styled(Arrow)`
  display: none;
  ${devices.md} {
    display: block;
    height: 2em;
    width: 3em;
    path {
      stroke: ${({ theme: { colors } }) => colors.dark};
    }
  }
`;
export const OptionImg = styled.img`
  ${devices.md} {
    display: none;
  }
`;
export const OptionDescription = styled.p<{ $isDescShowed: boolean }>`
  ${devices.md} {
    display: ${({ $isDescShowed }) => ($isDescShowed ? "block" : "none")};
  }
`;

export const OptionPrice = styled.h4`
  ${devices.md} {
    display: none;
  }
`;
export const OptionButton = styled.div`
  ${devices.md} {
    order: 999;
    width: 100%;
  }
`;
export const Gallery = styled.div`
  display: flex;
  gap: 0.5em;
  justify-content: center;
  ${devices.md} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.1em;
  }
`;
export const FirstPhoto = styled.img`
  display: none;
  ${devices.md} {
    max-width: 100%;
    display: block;
  }
`;
export const GalleryPhoto = styled.img`
  max-width: 40px;
  ${devices.md} {
    max-width: 100%;
    min-width: 100%;
  }
`;
