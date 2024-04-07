import { FC } from "react";
import { ThemeProvider } from "styled-components";

import { ThemeProps } from "./interfaces";

export const theme = {
  colors: {
    sub: "#BFC3CF",
    dark: "#252525",
    white: "#ffffff",
    main: "#3CA5E9",
    secondary: "#C1E7FF",
    background: "#E7F6FF",
  },
  radiuses: { small: ".6em", big: "2em" },
};

export const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
