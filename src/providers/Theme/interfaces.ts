import { ReactNode } from "react";

export interface ThemeProps {
  children: ReactNode;
}
export interface BaseTheme {
  colors: {
    secondary: string;
    dark: string;
    white: string;
    main: string;
    sub: string;
    background: string;
  };
  radiuses: { small: string; big: string };
}
