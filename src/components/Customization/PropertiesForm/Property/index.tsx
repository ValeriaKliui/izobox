import { FC, memo } from "react";

import { PropertyProps } from "./interfaces";
import { Container, TitleContainer } from "./styled";

export const Property: FC<PropertyProps> = memo(
  ({ title, children, isOpened, onClick }) => (
    <Container $isOpened={isOpened}>
      <TitleContainer $isOpened={isOpened} onClick={onClick}>
        <p className={isOpened ? "bold" : ""}>{title}</p>
      </TitleContainer>
      {children}
    </Container>
  ),
);
