import { ContactsItem, Networks } from "@components/Header";
import { Nav } from "@components/Nav";
import { FC, useEffect } from "react";

import { ContactsContainer, Container } from "./styled";
import { MobileMenuProps } from "./interfaces";

export const MobileMenu: FC<MobileMenuProps> = ({ isOpened }) => {
  useEffect(() => {
    if (isOpened) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpened]);

  return (
    <Container $isOpened={isOpened}>
      <Nav isVertical />
      <ContactsContainer>
        <Networks />
        <ContactsItem />
      </ContactsContainer>
    </Container>
  );
};
