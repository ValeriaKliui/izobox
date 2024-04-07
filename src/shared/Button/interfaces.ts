import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  choosen?: boolean;
  sub?: boolean;
}
export type ButtonStyledProps = {
  [Property in keyof Omit<
    ButtonProps,
    "children"
  > as `$${Property}`]: () => Omit<ButtonProps, "children">[Property];
};
