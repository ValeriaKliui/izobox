import Basic from "@assets/img/basic.png";
import Basic1 from "@assets/img/basic-1.png";
import Basic2 from "@assets/img/basic-2.png";
import Basic3 from "@assets/img/basic-3.png";
import Basic4 from "@assets/img/basic-4.png";
import ReviewImg from "@assets/img/elzhdej.png";
import Pro from "@assets/img/pro.png";
import Pro1 from "@assets/img/pro-1.png";
import Pro2 from "@assets/img/pro-2.png";
import Pro3 from "@assets/img/pro-3.png";
import Pro4 from "@assets/img/pro-4.png";
import Pro5 from "@assets/img/pro-5.png";
import BasicWithoutWindow from "@assets/img/without-window.png";
import { BasicDescription } from "@components/BasicDesciption";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import Shelf from '@assets/img/shelf.png';
import Lamp from '@assets/img/lamp.png';
import Light from '@assets/img/light.png';
import ShelfComplect from '@assets/img/shelf-complect.png';
import Wheels from '@assets/img/wheels.png';
import Wheel from '@assets/img/whell.png';
import InsideAngle from '@assets/img/insida-angle.png';
import Inside from '@assets/img/inside.png';
import Gallery from '@assets/img/gallery.png';

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

export const IZOBOXES = {
  basic: {
    type: IzoboxType.basic,
    price: 150000,
    photo: Basic,
    photoWithoutWindow: BasicWithoutWindow,
    windows: {
      with: "С окном",
      without: "Без окна",
    },
    descriptionText:
      "Вокальная кабина Standart оснащена тройной гибридной системой вентиляции, который быстро обновляет воздух в кабинке, создавая абсолютный комфорт для продолжительной работы.",
    dimensions: [
      ["снаружи", "115x115x220 см (г, ш, в)"],
      ["внутри", "100x100x220 см (г, ш, в)"],
      ["вес", "185 кг"],
    ],
    equipment: [
      "звукоизоляционное триплекс-окно - 1шт",
      "встроенная бесшумная вентиляция - 1шт",
      "внешняя усиленная вентиляция - 1шт",
      "сетевой фильтр - 1шт",
      "LED светильник - 1шт",
      "столик для оборудования - 1шт",
      "кабель порт - 1шт",
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
    allColors: [
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
      "#cc1e2e"
    ],
    galleryPhotos: [Basic1, Basic2, Basic3, Basic4],
    extraDescriptionComponent: <BasicDescription />,
    videos: [
      "https://www.youtube.com/embed/VWSP4yjY0RM?si=2doNQ44V5_e8Ciux",
      "https://www.youtube.com/embed/mGS9jocf5NA?si=ZyVGig325seIEzE1",
      "https://www.youtube.com/embed/vChExsRybkI?si=GQnc14OJanMijuA3",
      "https://www.youtube.com/embed/ln9mshvKJrM?si=LIrvRS48lhck7oD7",
      "https://www.youtube.com/embed/AU09ujNHs4U?si=ceXMdf3bfQvbbeVE",
    ],
  },
  pro: {
    type: IzoboxType.pro,
    price: 450000,
    descriptionText:
      "IzoBox™ Pro – кабина изготовленная специально для Вас на заказ: любой размер, внешний вид, функциональность твоего пространства! Это может быть студия, домашний кинотеатр, мобильный офис или даже целое звукоизолированная аудитория! Больше не надо затевать долгострой, более того вкладывать деньги в то, что Вы никогда не разберете и не перевезете! Звукоизоляционные кабины IzoRoom™ Custom – абсолютная альтернатива традиционной звукоизоляционной отделке.",
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
    option: "Полка",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: Shelf,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
  {
    option: "Комплект полок",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: ShelfComplect,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
  {
    option: "Колёса опорные",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: Wheels,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
  {
    option: "Светильник",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: Lamp,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
  {
    option: "Светильник",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: Light,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
  {
    option: "Колёса опорные",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: Wheel,
    galleryPhotos: [InsideAngle, Inside, Gallery],
    price: 18500,
  },
];
