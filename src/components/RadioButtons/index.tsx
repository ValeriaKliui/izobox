import { ChangeEvent, FC, useState } from "react";

import { RadioButtonsProps } from "./interfaces";
import { Container, Label } from "./styled";

export const RadioButtons: FC<RadioButtonsProps> = ({
  values,
  handleChange = () => {},
}) => {
  const [radioValue, setRadioValue] = useState(values[0].value);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
    setRadioValue(e.target.value);
  };

  return (
    <Container>
      {values.map(({ text, value }) => (
        <Label key={value}>
          <input
            value={value}
            checked={radioValue === value}
            onChange={onChange}
            type="radio"
          />
          <p> {text}</p>
        </Label>
      ))}
    </Container>
  );
};
