import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
`;
export const Container = styled.div`
  display: flex;
  gap: 4em;
`;
export const Author = styled.div`
  display: flex;
  gap: 1em;
`;
export const Avatar = styled.img`
  border-radius: 100%;
`;
export const Image = styled.img`
  transform: translateY(-80px) scale(1.5);
`;
