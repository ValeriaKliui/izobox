import { ColorInside, ColorOutside } from "@shared/Colors/interfaces";
import { ReactNode } from "react";

export interface Izobox {
  descriptionText: string;
  photo: string;
  sliderPhotos: string[];
  galleryPhotos: string[];
  price: number;
  type: IzoboxType;
  colorsInside: string[];
  colorsOutside: string[];
  allColors?: (ColorInside | ColorOutside)[];
  videos: string[];
  photoWithoutWindow?: string;
  windows?: { with: string; without: string };
  dimensions?: Array<string[]>;
  equipment?: string[];
  features?: string[];
  extraDescriptionComponent?: ReactNode;
  options?: string[];
}
export enum IzoboxType {
  basic = "basic",
  basicWithoutWindow = "basicWithoutWindow",
  pro = "pro",
}
export interface IzoboxContextType {
  izobox: Izobox;
  chooseIzobox: (izobox: IzoboxType) => void;
}
