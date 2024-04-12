import { Button } from "@shared/Button";
import { BigText } from "@shared/Typography/Typography";

import {
  Download,
  FileContainer,
  FormContainer,
  InputFile,
  Text,
  TextArea,
} from "./styled";

export const AccessoriesForm = () => (
  <div className="flex-col-gap">
    <p>Опишите необходимые Вам аксессуары</p>
    <FormContainer>
      <TextArea placeholder="Стол, кастомный столик, полки, крепления для оборудования и т.д." />
      <div className="flex-col-gap">
        <p>Прикрепите фото примеры</p>
        <FileContainer>
          <Text>
            <Download />
            <BigText className="primary-text bold underline">
              Выберите на устройстве{" "}
            </BigText>{" "}
            <BigText>или перетащите файлы</BigText>
          </Text>
          <InputFile type="file" />
        </FileContainer>
        <Button>Прикрепить</Button>
      </div>
    </FormContainer>
  </div>
);
