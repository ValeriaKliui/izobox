import CabineImg from "@assets/img/cabine.png";
import Cabine from "@assets/img/cabine-b.png";
import InsideAngle from "@assets/img/insida-angle.png";
import Inside from "@assets/img/inside.png";
import { ANCHORS } from "@constants/paths";
import { Button } from "@shared/Button";
import { BigText, SmallText } from "@shared/Typography/Typography";
import { HashLink as Link } from "react-router-hash-link";

import {
  AboutContainer,
  Container,
  Gallery,
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
        <Link to={`#${ANCHORS.custom}`}>
          <Button>Собрать кастомный IzoBox</Button>
        </Link>
      </TextContainer>
    </Preview>
    <AboutContainer>
      <TextAbout className="flex-col-gap">
        <h2>Что такое IzoBox?</h2>
        <SmallText>
          Звукоизоляционные вокальные и инструментальные кабины c бесшумной
          вентиляцией и дизайнерским светом создают все условия для абсолютного
          комфорта, полного творческого погружения и вдохновения.
        </SmallText>
      </TextAbout>
      <div className="flex-col-gap">
        <Gallery>
          {IMAGES.map((img) => (
            <Photo src={img} key={img} />
          ))}
        </Gallery>
        <MoreText className="semibold">Больше фото</MoreText>
      </div>
    </AboutContainer>
  </Container>
);
