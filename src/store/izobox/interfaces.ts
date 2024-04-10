import {
  ColorInside,
  ColorOutside,
} from "@components/IzoboxSelection/BasicIzobox/Colors/interfaces";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";

export interface IzoboxState {
  type: IzoboxType;
  colorInside: ColorInside;
  colorOutside: ColorOutside;
}
export interface BasicIzoboxState {
  window: Windows;
  extraOptions: number[];
}
export enum Windows {
  with = "С окном",
  without = "Без окна",
}
