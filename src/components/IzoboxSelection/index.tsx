import { useAppSelector } from "@hooks/typedHooks";
import { useIzobox } from "@hooks/useIzobox";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { Button } from "@shared/Button";
import { selectIsWindow } from "@store/izobox/basicIzobox";
import { Windows } from "@store/izobox/interfaces";

import { BasicIzobox } from "./BasicIzobox";
import { IzoboxTypeSelection } from "./IzoboxType";
import { FlexGap, Gallery, IzoboxContainer, Properties } from "./styled";

export const IzoboxSelection = () => {
  const { izobox } = useIzobox();

  const isWindow = useAppSelector(selectIsWindow);

  return (
    <div className="wrapper">
      <h3>
        IzoBox <span className="primary-text">{izobox.type}</span>
      </h3>
      <IzoboxContainer>
        <Gallery>
          <img
            src={
              izobox.type === IzoboxType.basic &&
              Windows[isWindow] === Windows.without
                ? izobox.photoWithoutWindow
                : izobox.photo
            }
          />
        </Gallery>
        <Properties>
          <IzoboxTypeSelection />
          {izobox.type === IzoboxType.basic && <BasicIzobox />}

          <FlexGap>
            <Button>Купить</Button>
            <Button sub>В кредит</Button>
          </FlexGap>
        </Properties>
      </IzoboxContainer>
    </div>
  );
};
