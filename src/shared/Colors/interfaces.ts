import { ColorType } from "@components/Modal/ColorModal/interfaces";
import { IZOBOXES } from "@constants/index";

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
