import ArrowSvg from "@assets/icons/arr.svg?react";
import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  cursor: pointer;
`;

export const Arrow = styled(ArrowSvg)<{ $isShown: boolean }>`
  transform: ${({ $isShown }) => ($isShown ? "rotate(180deg)" : "unset")};
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
  backdrop-filter: blur(20px);
  box-shadow: 0 1px 24px -1px rgba(0, 0, 0, 0.1);
`;
export const Gallery = styled.div`
  display: flex;
  gap: 0.5em;
  justify-content: center;
`;
export const GalleryPhoto = styled.img`
  max-width: 40px;
`;
