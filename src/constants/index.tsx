import Basic from "@assets/img/basic.png";
import Basic1 from "@assets/img/basic-1.png";
import Basic2 from "@assets/img/basic-2.png";
import Basic3 from "@assets/img/basic-3.png";
import Basic4 from "@assets/img/basic-4.png";
import ReviewImg from "@assets/img/elzhdej.png";
import Gallery from "@assets/img/gallery.png";
import InsideAngle from "@assets/img/insida-angle.png";
import Inside from "@assets/img/inside.png";
import Lamp from "@assets/img/lamp.png";
import Light from "@assets/img/light.png";
import Pro from "@assets/img/pro.png";
import Pro1 from "@assets/img/pro-1.png";
import Pro2 from "@assets/img/pro-2.png";
import Pro3 from "@assets/img/pro-3.png";
import Pro4 from "@assets/img/pro-4.png";
import Pro5 from "@assets/img/pro-5.png";
import Shelf from "@assets/img/shelf.png";
import ShelfComplect from "@assets/img/shelf-complect.png";
import SliderBasic1 from "@assets/img/slider-basic-1.png";
import SliderBasic2 from "@assets/img/slider-basic-2.png";
import SliderBasic3 from "@assets/img/slider-basic-3.png";
import SliderBasic4 from "@assets/img/slider-basic-4.png";
import SliderBasicWithoutWindow1 from "@assets/img/slider-basic-without-window-1.png";
import SliderBasicWithoutWindow2 from "@assets/img/slider-basic-without-window-2.png";
import SliderBasicWithoutWindow3 from "@assets/img/slider-basic-without-window-3.png";
import SliderBasicWithoutWindow4 from "@assets/img/slider-basic-without-window-4.png";
import SliderPro1 from "@assets/img/slider-pro-1.png";
import SliderPro2 from "@assets/img/slider-pro-2.png";
import SliderPro3 from "@assets/img/slider-pro-3.png";
import SliderPro4 from "@assets/img/slider-pro-4.png";
import Wheels from "@assets/img/wheels.png";
import Wheel from "@assets/img/whell.png";
import BasicWithoutWindow from "@assets/img/without-window.png";
import { BasicDescription } from "@components/BasicDesciption";
import { CUSTOM_ITEM } from "@components/Customization/PropertiesForm/interfaces";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";

export const NAV_LINKS = [
  { title: "Фото", link: "" },
  { title: "Видео", link: "" },
  { title: "Конструктор кабин", link: "" },
];

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { title: "Доставка и монтаж", link: "" },
  { title: "Стать дилером", link: "" },
  { title: "Политика обработки данных", link: "politics" },
];

export const REVIEWS = [
  {
    review:
      "Можно брать с собой на гастроли, собирается как конструктор. Можно снимать контент, выбрав освещение.",
    name: "Элджей",
    job: "Певец",
    avatarSrc: ReviewImg,
  },
  {
    review:
      "Можно брать с собой на гастроли, собирается как конструктор. Можно снимать контент, выбрав освещение.",
    name: "Федук",
    job: "Певец",
    avatarSrc: ReviewImg,
  },
];

export const allColors = [
  "#d7e2f0",
  "#18fff8",
  "#ebc403",
  "#6bbf02",
  "#a0c71b",
  "#d6b3d",
  "#c5f48a",
  "#e4876f",
  "#730858",
  "#93e6ef",
  "#a869d7",
  "#23e0c0",
  "#1bb46b",
  "#128576",
  "#343f3a",
  "#b00e84",
  "#f6b04b",
  "#61fbe1",
  "#4958e5",
  "#a2abea",
  "#c5945f",
  "#1d53ee",
  "#5c1b60",
  "#db0bc4",
  "#bb9d95",
  "#5a6b40",
  "#e08f63",
  "#19a5bb",
  "#3d1a1",
  "#dc3e00",
  "#397d75",
  "#3bd13f",
  "#e4fee4",
  "#5b4688",
  "#666b73",
  "#aac9ba",
  "#2f997f",
  "#26235",
  "#f1c4b4",
  "#42de63",
  "#120fa1",
  "#e84838",
  "#3b6115",
  "#d58c5d",
  "#116d2f",
  "#945f",
  "#5c77ce",
  "#a67161",
  "#16b847",
  "#cc1e2e",
];

export const BasicIzobox = {
  type: IzoboxType.basic,
  price: 150000,
  photo: Basic,
  sliderPhotos: [
    SliderBasic1,
    SliderBasic2,
    SliderBasic3,
    SliderBasic4,
    Wheel,
    Lamp,
    Shelf,
  ],
  descriptionText:
    "Вокальная кабина Standart оснащена тройной гибридной системой вентиляции, который быстро обновляет воздух в кабинке, создавая абсолютный комфорт для продолжительной работы.",
  dimensions: [
    ["снаружи", "115x115x220 см (г, ш, в)"],
    ["внутри", "100x100x220 см (г, ш, в)"],
    ["вес", "185 кг"],
  ],
  equipment: [
    "звукоизоляционное триплекс-окно - 1шт",
    "встроенная бесшумная вентиляция - 1шт",
    "внешняя усиленная вентиляция - 1шт",
    "сетевой фильтр - 1шт",
    "LED светильник - 1шт",
    "столик для оборудования - 1шт",
    "кабель порт - 1шт",
  ],
  features: [
    "базовый уровень звукоизоляции",
    "сборно-разборная",
    "гибридная тройная вентиляция",
    "звукоизоляционное триплекс-окно",
    "LED освещение",
    "льготная подписка на апгрейды",
    "гарантия 3 года",
  ],
  colorsInside: [
    "#8441A4",
    "#5C2117",
    "#418ba4",
    "#e82982",
    "#122107",
    "#7BCEE9",
    "#29E886",
    "#0d7fa4",
    "#98aca2",
  ],
  colorsOutside: ["#FE9B30", "#F92E32", "#143F86", "#3CA5E9"],
  allColors,
  galleryPhotos: [Basic1, Basic2, Basic3, Basic4],
  extraDescriptionComponent: <BasicDescription />,
  videos: [
    "https://www.youtube.com/embed/VWSP4yjY0RM?si=2doNQ44V5_e8Ciux",
    "https://www.youtube.com/embed/mGS9jocf5NA?si=ZyVGig325seIEzE1",
    "https://www.youtube.com/embed/vChExsRybkI?si=GQnc14OJanMijuA3",
    "https://www.youtube.com/embed/ln9mshvKJrM?si=LIrvRS48lhck7oD7",
    "https://www.youtube.com/embed/AU09ujNHs4U?si=ceXMdf3bfQvbbeVE",
  ],
};

export const IZOBOXES = {
  basic: BasicIzobox,
  basicWithoutWindow: {
    ...BasicIzobox,
    type: IzoboxType.basicWithoutWindow,
    photo: BasicWithoutWindow,
    sliderPhotos: [
      SliderBasicWithoutWindow1,
      SliderBasicWithoutWindow2,
      SliderBasicWithoutWindow3,
      SliderBasicWithoutWindow4,
      ShelfComplect,
      Lamp,
      Wheel,
    ],
    price: 135000,
  },
  pro: {
    type: IzoboxType.pro,
    price: 450000,
    descriptionText:
      "IzoBox™ Pro – кабина изготовленная специально для Вас на заказ: любой размер, внешний вид, функциональность твоего пространства! Это может быть студия, домашний кинотеатр, мобильный офис или даже целое звукоизолированная аудитория! Больше не надо затевать долгострой, более того вкладывать деньги в то, что Вы никогда не разберете и не перевезете! Звукоизоляционные кабины IzoRoom™ Custom – абсолютная альтернатива традиционной звукоизоляционной отделке.",
    sliderPhotos: [
      SliderPro1,
      SliderPro2,
      SliderPro3,
      SliderPro4,
      ShelfComplect,
      Light,
      Wheel,
      Lamp,
      Shelf,
    ],
    options: [
      "Кастомный размер",
      "Огромный выбор декоров",
      "Столы, крепления для оборудования",
      "Выбор степени звукоизоляции",
    ],
    colorsInside: [
      "linear-gradient(135deg,#009245,#FCEE21,#D9E021)",
      "linear-gradient(135deg,#79CBCA,#E684AE)",
      "linear-gradient(135deg,#ED6EA0,#F7186A,#FBB03B)",
      "linear-gradient(135deg,#77A1D3,#79CBCA)",
      "linear-gradient(135deg,#033395,#27F0F0)",
      "linear-gradient(135deg,#25AAE1,#04BEFE,#3f86ED)",
      "linear-gradient(135deg,#65799B,#5E2563)",
      "linear-gradient(135deg,#29323C,#2B5876,#4E4376)",
      "linear-gradient(135deg,#70F570,#07F7F7)",
      "linear-gradient(135deg,#a6e9c2,#e69658)",
      "linear-gradient(135deg,#9b5fe0,#31b6f4)",
      "linear-gradient(135deg,#edeec4,#f43131)",
    ],
    colorsOutside: [
      "linear-gradient(135deg,#009245,#F7186A,#D9E021)",
      "linear-gradient(135deg,#29323C,#E684AE)",
      "linear-gradient(135deg,#ED6EA0,#79CBCA,#FBB03B)",
      "linear-gradient(135deg,#65799B,#70F570)",
      "linear-gradient(135deg,#25AAE1,#04BEFE,#3f86ED)",
      "linear-gradient(135deg,#65799B,#5E2563)",
      "linear-gradient(135deg,#29323C,#2B5876,#4E4376)",
      "linear-gradient(135deg,#70F570,#07F7F7)",
      "linear-gradient(135deg,#a6e9c2,#e69658)",
      "linear-gradient(135deg,#9b5fe0,#edeec4)",
      "linear-gradient(135deg,#e69658,#29323C)",
      "linear-gradient(135deg,#3f86ED,#27F0F0)",
    ],
    allColors,
    galleryPhotos: [Pro1, Pro2, Pro3, Pro4, Pro5],
    photo: Pro,
    videos: [
      "https://www.youtube.com/embed/kMy-YF2mRz4?si=_K9cehtHCNDxLj-4",
      "https://www.youtube.com/embed/hwNW8fxoiWY?si=vqXsLhbQATzWoQ4W",
      "https://www.youtube.com/embed/XPg883hXLg0?si=s62oW51RegykFVLI",
      "https://www.youtube.com/embed/a3y7lYfKtuU?si=jaKfwE9-LVw4x1H2",
      "https://www.youtube.com/embed/W8Uh_4YCzmQ?si=X2uAU1Jqyl4SVnlP",
    ],
  },
};

export const EXTRA_OPTIONS = [
  {
    id: 1,
    option: "Полка",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: Shelf,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
  {
    id: 2,
    option: "Комплект полок",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: ShelfComplect,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
  {
    id: 3,
    option: "Колёса опорные",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: Wheels,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
  {
    id: 4,
    option: "Светильник",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: Lamp,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
  {
    id: 5,
    option: "Светильник",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: Light,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
  {
    id: 6,
    option: "Колёса опорные",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: Wheel,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
];

export const WINDOWS: CUSTOM_ITEM[] = [
  {
    title: "Окно сзади",
    dimensions: [
      { name: "X", initValue: 138 },
      { name: "Y", initValue: 800 },
      { name: "Ширина", initValue: 750 },
      { name: "Высота", initValue: 800 },
    ],
  },
  {
    title: "Окно спереди",
    dimensions: [
      { name: "X", initValue: 138 },
      { name: "Y", initValue: 800 },
      { name: "Ширина", initValue: 750 },
      { name: "Высота", initValue: 800 },
    ],
  },
  {
    title: "Окно справа",
    dimensions: [
      { name: "X", initValue: 138 },
      { name: "Y", initValue: 800 },
      { name: "Ширина", initValue: 750 },
      { name: "Высота", initValue: 800 },
    ],
  },
  {
    title: "Окно слева",
    dimensions: [
      { name: "X", initValue: 138 },
      { name: "Y", initValue: 800 },
      { name: "Ширина", initValue: 750 },
      { name: "Высота", initValue: 800 },
    ],
  },
  {
    title: "Окно в двери",
    dimensions: [
      { name: "X", initValue: 138 },
      { name: "Y", initValue: 800 },
      { name: "Ширина", initValue: 750 },
      { name: "Высота", initValue: 800 },
    ],
  },
];

export const WALLS: CUSTOM_ITEM[] = [
  {
    title: "Размеры снаружи",
    dimensions: [
      { name: "Ширина", initValue: 1146 },
      { name: "Глубина", initValue: 1146 },
      { name: "Высота", initValue: 2194 },
    ],
  },
  {
    title: "Размеры внутри",
    dimensions: [
      { name: "Ширина", initValue: 1010 },
      { name: "Глубина", initValue: 1010 },
      { name: "Высота", initValue: 2090 },
    ],
  },
];

export const CABLES: CUSTOM_ITEM[] = [
  {
    title: "Кабель сзади",
    dimensions: [
      { name: "X", initValue: 990 },
      { name: "Y", initValue: 120 },
    ],
  },
  {
    title: "Кабель спереди",
    dimensions: [
      { name: "X", initValue: 990 },
      { name: "Y", initValue: 120 },
    ],
  },
  {
    title: "Кабель справа",
    dimensions: [
      { name: "X", initValue: 990 },
      { name: "Y", initValue: 120 },
    ],
  },
  {
    title: "Кабель слева",
    dimensions: [
      { name: "X", initValue: 990 },
      { name: "Y", initValue: 120 },
    ],
  },
];

export const DOORS: CUSTOM_ITEM[] = [
  {
    dimensions: [
      { name: "X", initValue: 200 },
      { name: "Y", initValue: 118 },
      { name: "Ширина", initValue: 1010 },
      { name: "Высота", initValue: 1010 },
    ],
    pickers: [{ title: "Петли", values: ["Слева", "Справа"] }],
  },
];

export const HOODS: CUSTOM_ITEM[] = [
  {
    title: "Вытяжка сзади",
    dimensions: [
      { name: "X", initValue: 990 },
      { name: "Y", initValue: 120 },
    ],
  },
  {
    title: "Вытяжка спереди",
    dimensions: [
      { name: "X", initValue: 990 },
      { name: "Y", initValue: 120 },
    ],
  },
  {
    title: "Вытяжка справа",
    dimensions: [
      { name: "X", initValue: 990 },
      { name: "Y", initValue: 120 },
    ],
  },
  {
    title: "Вытяжка слева",
    dimensions: [
      { name: "X", initValue: 990 },
      { name: "Y", initValue: 120 },
    ],
  },
];
