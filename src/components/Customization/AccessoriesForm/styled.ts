import DownloadSvg from "@assets/icons/download.svg?react";
import styled from "styled-components";

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
export const FileContainer = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Text = styled.div`
  position: absolute;
  align-self: center;
  justify-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;
export const InputFile = styled.input`
  cursor: pointer;
  &::file-selector-button {
    background-color: ${({ theme: { colors } }) => colors.white};
    padding: 5em 7em;
    border: 3px dashed ${({ theme: { colors } }) => colors.main};
    border-radius: ${({ theme: { radiuses } }) => radiuses.small};
    display: flex;
    width: 100%;
    cursor: pointer;
  }

  &::file-selector-button:active {
    padding: 15em 20em;
  }
  &::file-selector-button {
    color: transparent;
  }
`;

export const Download = styled(DownloadSvg)`
  width: 2em;
  height: 2em;
  padding: 1em;
  background-color: ${({ theme: { colors } }) => colors.main};
  border-radius: ${({ theme: { radiuses } }) => radiuses.big};
`;
