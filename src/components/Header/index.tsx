import IgIcon from "@assets/icons/ig.svg?react";
import MailIcon from "@assets/icons/mail.svg?react";
import PhoneIcon from "@assets/icons/phone.svg?react";
import TgIcon from "@assets/icons/tg.svg?react";
import WpIcon from "@assets/icons/wp.svg?react";
import YtIcon from "@assets/icons/yt.svg?react";
import { Nav } from "@components/Nav";
import { Logo } from "@shared/Logo";

import { Contact, Contacts, HeaderContainer, IconsContainer } from "./styled";

export const Networks = () => (
  <IconsContainer>
    <TgIcon />
    <IgIcon />
    <YtIcon />
    <WpIcon />
  </IconsContainer>
);
export const ContactsItem = () => (
  <Contacts>
    <Contact>
      <PhoneIcon />
      <p>+7 (495) 784-05-66</p>
    </Contact>
    <Contact>
      <MailIcon />
      <p> info@izobox.com</p>
    </Contact>
  </Contacts>
);

export const Header = () => (
  <HeaderContainer className="wrapper">
    <Logo />
    <Nav />
    <ContactsItem />
    <IconsContainer>
      <TgIcon />
      <IgIcon />
      <YtIcon />
      <WpIcon />
    </IconsContainer>
  </HeaderContainer>
);
