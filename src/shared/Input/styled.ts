import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 1em 0;
  border: none;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.sub};
  width: 300px;
  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.main};
  }
`;
