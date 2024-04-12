import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { ColorInside, ColorOutside } from "@shared/Colors/interfaces";

export interface IzoboxState {
  type: IzoboxType;
  colorInside: ColorInside | null;
  colorOutside: ColorOutside | null;
}
export interface BasicIzoboxState {
  window: Windows;
  extraOptions: number[];
}
export enum Windows {
  with = "С окном",
  without = "Без окна",
}
