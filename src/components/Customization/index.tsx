import { Button } from "@shared/Button";
import { BiggestText } from "@shared/Typography/Typography";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AccessoriesForm } from "./AccessoriesForm";
import { ColorsPicker } from "./ColorsPicker";
import { Config } from "./Config";
import { InformationForm } from "./InformationForm";
import { StagesEnum } from "./interfaces";
import { Controls, Stage, Stages, StagesContainer } from "./styled";

export const Customization = () => {
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState(0);
  const stagesAmount = 4;

  const increaseStage = useCallback(() => {
    if (currentStage < stagesAmount - 1) setCurrentStage((prev) => prev + 1);
    if (currentStage === StagesEnum.Fourth) navigate("/order");
  }, [currentStage, navigate]);
  const decreaseStage = useCallback(() => {
    if (currentStage > 0) setCurrentStage((prev) => prev - 1);
  }, [currentStage]);

  const defineNextButtonText = () => {
    switch (currentStage) {
      case StagesEnum.First:
        return "Запомнить и продолжить";
      case StagesEnum.Fourth:
        return "Запросить стоимость и сроки";
      default:
        return "Дальше";
    }
  };

  return (
    <div className="wrapper flex-col-gap">
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
      {currentStage === StagesEnum.First && <Config />}
      {currentStage === StagesEnum.Second && <ColorsPicker />}
      {currentStage === StagesEnum.Third && <AccessoriesForm />}
      {currentStage === StagesEnum.Fourth && <InformationForm />}
      <Controls>
        {currentStage !== StagesEnum.First && (
          <Button sub onClick={decreaseStage}>
            Назад
          </Button>
        )}
        <Button onClick={increaseStage}>{defineNextButtonText()}</Button>
      </Controls>
    </div>
  );
};
