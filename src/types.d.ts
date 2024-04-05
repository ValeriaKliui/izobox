import "styled-components";

import { BaseTheme } from "@providers/Theme/interfaces";

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {}
}
