import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.8em 0;
`;
export const Contacts = styled.div`
  font-family: Poppins;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const Contact = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;
export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
  align-items: end;
  width: fit-content;
`;
