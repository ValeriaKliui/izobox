import ReviewImg from "@assets/img/elzhdej.png";
import Basic1 from "@assets/img/basic-1.png";
import Basic2 from "@assets/img/basic-2.png";
import Basic3 from "@assets/img/basic-3.png";
import Basic4 from "@assets/img/basic-4.png";
import Pro1 from "@assets/img/pro-1.png";
import Pro2 from "@assets/img/pro-2.png";
import Pro3 from "@assets/img/pro-3.png";
import Pro4 from "@assets/img/pro-4.png";
import Pro5 from "@assets/img/pro-5.png";
import Pro from "@assets/img/pro.png";
import Basic from "@assets/img/basic.png";
import BasicWithoutWindow from "@assets/img/without-window.png";
import { BasicDescription } from "@components/BasicDesciption";
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
    galleryPhotos: [Basic1, Basic2, Basic3, Basic4],
    extraDescriptionComponent: <BasicDescription />,
    videos: [
      "https://vk.com/artist/nautiluspompilius",
      "https://vk.com/artist/nautiluspompilius",
      "https://vk.com/artist/nautiluspompilius",
      "https://vk.com/artist/nautiluspompilius",
      "https://vk.com/artist/nautiluspompilius",
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
      "https://vk.com/artist/nautiluspompilius",
      "https://vk.com/artist/nautiluspompilius",
      "https://vk.com/artist/nautiluspompilius",
      "https://vk.com/artist/nautiluspompilius",
      "https://vk.com/artist/nautiluspompilius",
    ],
  },
};

export const EXTRA_OPTIONS = [
  {
    option: "Полка",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: "",
    galleryPhotos: "",
    price: 18500,
  },
  {
    option: "Комплект полок",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: "",
    galleryPhotos: "",
    price: 18500,
  },
  {
    option: "Колёса опорные",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: "",
    galleryPhotos: "",
    price: 18500,
  },
  {
    option: "Светильник",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: "",
    galleryPhotos: "",
    price: 18500,
  },
  {
    option: "Светильник",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: "",
    galleryPhotos: "",
    price: 18500,
  },
  {
    option: "Колёса опорные",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    photo: "",
    galleryPhotos: "",
    price: 18500,
  },
];
