import styled from "styled-components";

export const FlexGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
export const TextArea = styled.textarea`
  resize: none;
  width: 50%;
  height: 15em;
  border: 2px solid ${({ theme: { colors } }) => colors.sub};
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  padding: 1em;
`;
