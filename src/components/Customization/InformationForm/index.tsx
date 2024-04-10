import { Input } from "@shared/Input";

import { FormContainer } from "./styled";

export const InformationForm = () => {
  return (
    <div>
      <p>Заполните информацию о себе</p>
      <FormContainer>
        <Input placeholder="Ф.И.О." />
        <Input placeholder="Телефон" />
        <Input placeholder="Город" />
        <Input placeholder="Адрес" />
        <Input placeholder="E-mail" />
        <Input placeholder="Комментарий" />
      </FormContainer>
    </div>
  );
};
