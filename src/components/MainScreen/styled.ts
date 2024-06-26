import Arrow from "@assets/icons/arrow.svg";
import Izobox from "@assets/img/IzoBox.png";
import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${Izobox}) no-repeat;
  ${devices.lg} {
    gap: 4em;
  }
`;
export const Preview = styled.div`
  display: flex;
  ${devices.md} {
    flex-direction: column;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  flex-basis: 67%;
  margin-top: 6em;
  ${devices.md} {
    margin-top: 0;
  }
`;
export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  ${devices.lg} {
    flex-direction: column;
  }
`;
export const TextAbout = styled.div`
  flex: 1 1 0;
`;
export const Gallery = styled.div`
  display: flex;
  gap: 1em;
  flex: 1 1 0;
  ${devices.sm} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    gap: 1em;
    grid-auto-flow: row dense;
  }
  ${devices.xs} {
    justify-items: center;
  }
`;
export const Photo = styled.img`
  box-shadow: 0 7px 15px 0 rgba(0, 53, 133, 0.25);
  border-radius: ${({ theme }) => theme.radiuses.small};
`;
export const MoreText = styled.p`
  display: flex;
  gap: 1em;
  align-items: flex-start;
  align-self: flex-end;
  &::after {
    content: url(${Arrow});
  }
`;
