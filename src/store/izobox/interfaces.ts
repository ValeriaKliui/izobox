import {
  ColorInside,
  ColorOutside,
} from "@components/IzoboxSelection/BasicIzobox/Colors/interfaces";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";

export interface IzoboxState {
  type: IzoboxType;
}
export interface BasicIzoboxState {
  window: Windows;
  colorInside: ColorInside;
  colorOutside: ColorOutside;
  extraOptions: number[];
}
export enum Windows {
  with = "С окном",
  without = "Без окна",
}
