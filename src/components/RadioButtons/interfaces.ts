export interface RadioButtonsProps {
  values: { value: string; text: string }[];
  handleChange?: (value: string) => void;
}
