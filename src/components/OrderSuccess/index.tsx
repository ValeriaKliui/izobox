import Success from "@assets/icons/success.svg?react";
import { PATHS } from "@constants/paths";
import { Button } from "@shared/Button";
import { BiggestText, BigText } from "@shared/Typography/Typography";
import { NavLink } from "react-router-dom";

import { Container } from "./styled";

export const OrderSuccess = () => (
  <Container className="wrapper flex-col-gap">
    <Success />
    <BigText>
      Ваш заказ{" "}
      <span className="bold">#{Math.ceil(Math.random() * 100000)} </span>
      от{" "}
      <span className="bold">
        {new Date().toLocaleDateString("en-GB").replaceAll("/", ".")}{" "}
        {new Date().getHours()}:{new Date().getMinutes()}
      </span>{" "}
      успешно оформлен.
    </BigText>
    <BigText>
      Для согласования сроков и стомости заказа с Вами свяжется менеджер.
    </BigText>
    <BiggestText className="bold">Спасибо, что выбрали IzoBox!</BiggestText>
    <NavLink to={PATHS.MAIN}>
      <Button>На главную</Button>
    </NavLink>
  </Container>
);
