import { FC } from "react";

import { ModalProps } from "./interfaces";
import { Container, Cross, Shadow } from "./styled";

export const Modal: FC<ModalProps> = ({ isOpened, onClose, children }) => (
  <Shadow $isOpened={isOpened} onClick={onClose}>
    <Container onClick={(e) => e.stopPropagation()}>
      <Cross onClick={onClose} />
      {children}
    </Container>
  </Shadow>
);
