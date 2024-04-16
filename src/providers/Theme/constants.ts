import { BaseTheme, ScreenSizes } from "./interfaces";

export const theme: BaseTheme = {
  colors: {
    sub: "#BFC3CF",
    dark: "#252525",
    white: "#ffffff",
    main: "#3CA5E9",
    secondary: "#C1E7FF",
    background: "#E7F6FF",
  },
  radiuses: { small: ".6em", big: "2em" },
  transition: ".1s ease-out",
};
export const devices = {
  xs: `@media (max-width: ${ScreenSizes.xs}px)`,
  sm: `@media (max-width: ${ScreenSizes.sm}px)`,
  md: `@media (max-width: ${ScreenSizes.md}px)`,
  lg: `@media (max-width: ${ScreenSizes.lg}px)`,
  xl: `@media (max-width: ${ScreenSizes.xl}px)`,
  xxl: `@media (max-width: ${ScreenSizes.xxl}px)`,
  xxxl: `@media (min-width: ${ScreenSizes.xxl}px)`,
};
