import { CABLES, DOORS, HOODS, WINDOWS } from "@constants/index";
import { useState } from "react";

import { Properties } from "./interfaces";
import { Property } from "./Property";
import { SameContent } from "./SameContent";
import { Container, Content } from "./styled";
import { Walls } from "./Walls";

export const PropertiesForm = () => {
  const [openedProperty, setIsOpen] = useState(Properties.walls);

  const openProperty = (property: Properties) => {
    setIsOpen(property);
  };

  const defineContent = (property: Properties, isOpened: boolean) => {
    switch (property) {
      case Properties.walls:
        return <Walls />;

      case Properties.windows:
        return <SameContent items={WINDOWS} isOpened={isOpened} />;

      case Properties.port:
        return <SameContent items={CABLES} isOpened={isOpened} />;

      case Properties.door:
        return <SameContent items={DOORS} isOpened={isOpened} />;

      case Properties.hood:
        return <SameContent items={HOODS} isOpened={isOpened} />;

      default:
        break;
    }
  };

  return (
    <Container>
      {Object.values(Properties).map((property) => {
        const isOpened = openedProperty === property;
        return (
          <Property
            title={property}
            isOpened={isOpened}
            onClick={() => openProperty(property)}
            key={property}
          >
            <Content $isOpened={isOpened}>
              {defineContent(property, isOpened)}
            </Content>
          </Property>
        );
      })}
    </Container>
  );
};
