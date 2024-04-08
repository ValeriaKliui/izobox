import { FC } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./constants";
import { ThemeProps } from "./interfaces";

export const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
