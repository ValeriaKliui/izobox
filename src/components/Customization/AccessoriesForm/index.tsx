import { Button } from "@shared/Button";

import { FlexGap, FormContainer, TextArea } from "./styled";

export const AccessoriesForm = () => (
  <FlexGap>
    <p>Заполните информацию о себе</p>
    <FormContainer>
      <TextArea placeholder="Стол, кастомный столик, полки, крепления для оборудования и т.д." />
      <FlexGap>
        <p>Прикрепите фото примеры</p>
        <Button>Прикрепить</Button>
      </FlexGap>
    </FormContainer>
  </FlexGap>
);
