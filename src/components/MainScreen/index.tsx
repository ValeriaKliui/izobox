import CabineImg from "@assets/img/cabine.png";
import Cabine from "@assets/img/cabine-b.png";
import InsideAngle from "@assets/img/insida-angle.png";
import Inside from "@assets/img/inside.png";
import { Button } from "@shared/Button";
import { BigText, SmallText } from "@shared/Typography/Typography";

import {
  AboutContainer,
  Container,
  Gallery,
  GalleryContainer,
  MoreText,
  Photo,
  Preview,
  TextAbout,
  TextContainer,
} from "./styled";

const IMAGES = [Cabine, InsideAngle, Inside];

export const MainScreen = () => (
  <Container className="wrapper">
    <Preview>
      <div>
        <img src={CabineImg} />
      </div>
      <TextContainer>
        <h2>Акустические кабины IzoBox</h2>
        <BigText>Пой, репетируй, делай продакшн, никому не мешая!</BigText>
        <Button>Собрать кастомный IzoBox</Button>
      </TextContainer>
    </Preview>
    <AboutContainer>
      <TextAbout>
        <h2>Что такое IzoBox?</h2>
        <SmallText>
          Звукоизоляционные вокальные и инструментальные кабины c бесшумной
          вентиляцией и дизайнерским светом создают все условия для абсолютного
          комфорта, полного творческого погружения и вдохновения.
        </SmallText>
      </TextAbout>
      <GalleryContainer>
        <Gallery>
          {IMAGES.map((img) => (
            <Photo src={img} key={img} />
          ))}
        </Gallery>
        <MoreText className="semibold">Больше фото</MoreText>
      </GalleryContainer>
    </AboutContainer>
  </Container>
);
