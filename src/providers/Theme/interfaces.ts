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
  transition: string;
}
export enum ScreenSizes {
  xs = 400,
  sm = 600,
  md = 900,
  lg = 1280,
  xl = 1440,
  xxl = 1920,
}
