import { ChangeEvent, FC, useState } from "react";

import { RangeProps } from "./interfaces";
import {
  Container,
  DimensionInput,
  DimensionsContainer,
  PropertiesContainer,
  RangeStyled,
} from "./styled";

export const Range: FC<RangeProps> = ({ initValue, name }) => {
  const [value, setValue] = useState(initValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <Container>
      <PropertiesContainer>
        <p className="sub-color">{name}:</p>
        <DimensionsContainer>
          <DimensionInput value={value} onChange={handleChange} />
          <p>мм</p>
        </DimensionsContainer>
      </PropertiesContainer>
      <RangeStyled
        type="range"
        min={0}
        max={2000}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
};
