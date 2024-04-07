import styled from "styled-components";
import quoteImg from "@assets/icons/quote.svg";

export const Background = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
  margin-top: 3em;
`;
export const Container = styled.div`
  display: flex;
  gap: 4em;
  align-items: center;
`;
export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  position: relative;
  &::before {
    content: url(${quoteImg});
    position: absolute;
    top: -15px;
    left: -50px;
  }
  &::after {
    content: url(${quoteImg});
    transform: rotate(180deg);
    position: absolute;
    bottom: 50px;
    right: 0;
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
`;
