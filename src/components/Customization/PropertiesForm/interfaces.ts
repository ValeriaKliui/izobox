export enum Properties {
  walls = "Стены",
  windows = "Окна",
  door = "Дверь",
  port = "Кабель порт",
  hood = "Вытяжка",
}

export type Picker = {
  title: string;
  values: string[];
};

export type CUSTOM_ITEM = {
  dimensions: {
    name: string;
    initValue: number;
  }[];
  title?: string;
  pickers?: Picker[];
};
