import { RadioButtons } from "@components/RadioButtons";
import { Range } from "@shared/Range";
import { FC, Fragment, useCallback, useMemo, useState } from "react";

import { SameContentProps } from "./interfaces";
import { Picker } from "./Picker";
import { RangeContainer } from "./styled";
import { Container } from "./styled";

export const SameContent: FC<SameContentProps> = ({ items, isOpened }) => {
  const radioValues = useMemo(
    () => items.map(({ title }) => ({ value: title, text: title })),
    [items],
  );
  const [choosenValue, setChoosenValue] = useState("");
  const handleChange = useCallback(
    (value: string) => setChoosenValue(value),
    [],
  );

  return (
    <Container>
      <RadioButtons
        values={radioValues}
        handleChange={handleChange}
        classNameForActive="bold"
      />
      {items.map(({ dimensions, title, pickers }, index) => (
        <Fragment key={title}>
          <RangeContainer
            key={title}
            $index={(index + 1) * 2}
            $isChoosen={!title || title === choosenValue}
            $isOpened={isOpened}
          >
            {dimensions.map(({ name, initValue }) => (
              <Range initValue={initValue} name={name} />
            ))}
          </RangeContainer>
          {pickers?.map(({ title, values }) => (
            <Picker title={title} values={values} key={title} />
          ))}
        </Fragment>
      ))}
    </Container>
  );
};
