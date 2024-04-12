import { FC, useState } from "react";

import { PickerProps } from "./interfaces";
import { Option, Options } from "./styled";
import { Container } from "./styled";

export const Picker: FC<PickerProps> = ({ title, values }) => {
  const [choosenValue, setChoosenValue] = useState(values[0]);

  const onClick = (value: string) => setChoosenValue(value);

  return (
    <Container>
      <p className="sub-color">{title}:</p>
      <Options>
        {values.map((value) => (
          <Option
            onClick={() => onClick(value)}
            key={value}
            $isChoosen={choosenValue === value}
          >
            {value}
          </Option>
        ))}
      </Options>
    </Container>
  );
};
