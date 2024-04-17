import { HTMLAttributes } from "react";

export interface RadioButtonsProps extends HTMLAttributes<HTMLDivElement> {
  values: { value?: string; text?: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange?: (value: any) => void;
  classNameForActive?: string;
}
