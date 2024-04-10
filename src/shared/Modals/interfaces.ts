import { ReactNode } from "react";

export interface ModalProps {
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
}
