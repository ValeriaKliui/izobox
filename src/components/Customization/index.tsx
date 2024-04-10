import { Button } from "@shared/Button";
import { BiggestText } from "@shared/Typography/Typography";
import { useState } from "react";

import { AccessoriesForm } from "./AccessoriesForm";
import { ColorsPicker } from "./ColorsPicker";
import { InformationForm } from "./InformationForm";
import { StagesEnum } from "./interfaces";
import { Container, Controls, Stage, Stages, StagesContainer } from "./styled";

export const Customization = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const stagesAmount = 4;
  const increaseStage = () => {
    if (currentStage < stagesAmount - 1) setCurrentStage((prev) => prev + 1);
  };
  const decreaseStage = () => {
    if (currentStage > 0) setCurrentStage((prev) => prev - 1);
  };

  return (
    <Container className="wrapper">
      <StagesContainer>
        <BiggestText className="bold">Шаг {currentStage + 1}</BiggestText>
        <Stages>
          {Array(stagesAmount)
            .fill(1)
            .map((_, index) => (
              <Stage
                onClick={() => setCurrentStage(index)}
                key={index}
                $isCurrent={currentStage === index}
              />
            ))}
        </Stages>
      </StagesContainer>
      {currentStage === StagesEnum.Second && <ColorsPicker />}
      {currentStage === StagesEnum.Third && <AccessoriesForm />}
      {currentStage === StagesEnum.Fourth && <InformationForm />}
      <Controls>
        <Button sub onClick={decreaseStage}>
          Назад
        </Button>
        <Button onClick={increaseStage}>
          {currentStage === StagesEnum.Fourth
            ? "Запросить стоимость и сроки"
            : "Дальше"}
        </Button>
      </Controls>
    </Container>
  );
};
