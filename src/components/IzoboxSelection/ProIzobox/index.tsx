import { StyledLi } from "@components/BasicDesciption/styled";
import { IZOBOXES } from "@constants/index";
import { BigText } from "@shared/Typography/Typography";

export const ProIzobox = () => (
  <div className="flex-col-gap">
    <BigText className="semibold">
      <span>Создай студию своей мечты вместе с </span>
      <span className="bold">IzoBox™</span>
    </BigText>
    <ul>
      {IZOBOXES.pro.options.map((option) => (
        <StyledLi key={option}>
          <p>{option}</p>
        </StyledLi>
      ))}
    </ul>
  </div>
);
