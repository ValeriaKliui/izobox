import { ContactsItem, Networks } from "@components/Header";
import { FOOTER_LINKS } from "@constants/index";
import { Logo } from "@shared/Logo";
import { Link } from "react-router-dom";

import { Container, FooterContainer, LinksList, Subtext } from "./styled";

export const Footer = () => (
  <FooterContainer className="wrapper">
    <Logo />
    <Container>
      <LinksList>
        {FOOTER_LINKS.map(({ title, link }) => (
          <li key={title}>
            <Link to={link}>{title}</Link>
          </li>
        ))}
      </LinksList>
      <Networks />
      <ContactsItem />
    </Container>
    <Subtext> Все права защищены © 2022 IzoBox </Subtext>
  </FooterContainer>
);
