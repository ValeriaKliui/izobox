import { ChangeEvent, FC, Fragment, memo, useState } from "react";

import { RadioButtonsProps } from "./interfaces";
import { Label } from "./styled";

export const RadioButtons: FC<RadioButtonsProps> = memo(
  ({ values, handleChange = () => {}, classNameForActive }) => {
    const [radioValue, setRadioValue] = useState(values[0].value);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      handleChange(e.target.value);
      setRadioValue(e.target.value);
    };

    const isChecked = (value: string) => value === radioValue;

    return (
      <>
        {values.map(({ text, value = "" }) => (
          <Fragment key={value}>
            {text && (
              <Label className={isChecked(value) ? classNameForActive : ""}>
                <input
                  value={value}
                  checked={isChecked(value)}
                  onChange={onChange}
                  type="radio"
                />
                <p> {text}</p>
              </Label>
            )}
          </Fragment>
        ))}
      </>
    );
  },
);
