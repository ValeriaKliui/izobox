import { ReactNode } from "react";

export interface Izobox {
  descriptionText: string;
  photo: string;
  galleryPhotos: string[];
  price: number;
  type: IzoboxType;
  colorsInside: string[];
  colorsOutside: string[];
  videos: string[];
  photoWithoutWindow?: string;
  windows?: { with: string; without: string };
  dimensions?: Array<string[]>;
  equipment?: string[];
  features?: string[];
  extraDescriptionComponent?: ReactNode;
}
export enum IzoboxType {
  basic = "Basic",
  pro = "Pro",
}
export interface IzoboxContextType {
  izobox: Izobox;
  chooseIzobox: (izobox: IzoboxType) => void;
}
