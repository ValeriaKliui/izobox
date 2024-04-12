import { IZOBOXES } from "@constants/index";
import { ColorType } from "@shared/Modals/ColorModal/interfaces";

export interface ColorsProps {
  colors: string[];
  title: string;
  colorType: ColorType;
}
export type ColorInside =
  | (typeof IZOBOXES.basic.colorsInside)[number]
  | (typeof IZOBOXES.basic.allColors)[number];

export type ColorOutside =
  | (typeof IZOBOXES.basic.colorsOutside)[number]
  | (typeof IZOBOXES.basic.allColors)[number];
