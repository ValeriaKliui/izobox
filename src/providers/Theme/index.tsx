import { FC, memo } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./constants";
import { ThemeProps } from "./interfaces";

export const Theme: FC<ThemeProps> = memo(({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
));
