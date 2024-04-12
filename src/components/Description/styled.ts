import { BigText } from "@shared/Typography/Typography";
import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  gap: 1em;
`;
export const Tab = styled(BigText)<{ $isChoosen: boolean }>`
  border-bottom: 3px solid
    ${({ $isChoosen, theme: { colors } }) =>
      $isChoosen ? colors.dark : "transparent"};
  color: ${({ $isChoosen, theme: { colors } }) =>
    $isChoosen ? colors.dark : colors.sub};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    border-bottom: 3px solid ${({ theme: { colors } }) => colors.dark};
    color: ${({ theme: { colors } }) => colors.dark};
  }
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(240px, 1fr));
  gap: 1em;
`;
export const PhotoContainer = styled.div`
  width: 240px;
  height: 240px;
`;
export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
export const Videos = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-auto-flow: column;
  gap: 2em;
`;
export const Video = styled.div`
  &:first-child {
    grid-column: span 3;
    grid-row: span 4;
  }
`;
export const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
`;
