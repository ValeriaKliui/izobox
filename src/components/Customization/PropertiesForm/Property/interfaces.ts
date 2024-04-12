import { HTMLAttributes } from "react";

import { Properties } from "../interfaces";

export interface PropertyProps extends HTMLAttributes<HTMLDivElement> {
  title: Properties;
  isOpened: boolean;
}
