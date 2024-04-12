import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-top: auto !important;
  padding: 2em 0;
`;
export const LinksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  gap: 1em;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Subtext = styled.p`
  font-family: Montserrat-Medium;
  align-self: center;
  color: ${({ theme: { colors } }) => colors.sub};
`;
