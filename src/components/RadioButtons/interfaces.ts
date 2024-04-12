import { HTMLAttributes } from "react";

export interface RadioButtonsProps extends HTMLAttributes<HTMLDivElement> {
  values: { value: string; text?: string }[];
  handleChange?: (value: string) => void;
  classNameForActive?: string;
}
