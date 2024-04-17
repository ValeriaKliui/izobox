import IgIcon from "@assets/icons/ig.svg?react";
import MailIcon from "@assets/icons/mail.svg?react";
import PhoneIcon from "@assets/icons/phone.svg?react";
import TgIcon from "@assets/icons/tg.svg?react";
import WpIcon from "@assets/icons/wp.svg?react";
import YtIcon from "@assets/icons/yt.svg?react";
import { Burger } from "@components/Burger";
import { MobileMenu } from "@components/MobileMenu";
import { Nav } from "@components/Nav";
import { useAppDispatch, useAppSelector } from "@hooks/typedHooks";
import { ScreenSizes } from "@providers/Theme/interfaces";
import { useWindowWidth } from "@react-hook/window-size";
import { Logo } from "@shared/Logo";
import {
  closeMobileMenu,
  openMobileMenu,
  selectIsMobileMenuOpened,
} from "@store/app/appSlice";
import { useEffect } from "react";

import {
  Contact,
  Contacts,
  ContactsContainer,
  HeaderContainer,
  IconsContainer,
  NavContainer,
  NetworksContainer,
} from "./styled";

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

export const Header = () => {
  const windowWidth = useWindowWidth();
  const isMobileMenuOpened = useAppSelector(selectIsMobileMenuOpened);
  const dispatch = useAppDispatch();
  const toggleMenu = () =>
    isMobileMenuOpened
      ? dispatch(closeMobileMenu())
      : dispatch(openMobileMenu());

  useEffect(() => {
    if (windowWidth > ScreenSizes.md) dispatch(closeMobileMenu());
  }, [windowWidth, dispatch]);

  return (
    <>
      <HeaderContainer className="wrapper">
        <Logo />
        <NavContainer>
          <Nav />
        </NavContainer>
        <ContactsContainer>
          <ContactsItem />
        </ContactsContainer>
        <NetworksContainer>
          <Networks />
        </NetworksContainer>
        <Burger onClick={toggleMenu} isOpened={isMobileMenuOpened} />
      </HeaderContainer>
      <MobileMenu isOpened={isMobileMenuOpened} />
    </>
  );
};
