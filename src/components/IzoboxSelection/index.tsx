import { Slider } from "@components/Slider";
import { useIzobox } from "@hooks/useIzobox";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { Button } from "@shared/Button";

import { BasicIzobox } from "./BasicIzobox";
import { IzoboxTypeSelection } from "./IzoboxType";
import { FlexGap, Gallery, IzoboxContainer, Properties, Type } from "./styled";

export const IzoboxSelection = () => {
  const { izobox } = useIzobox();
  return (
    <div className="wrapper">
      <h3>
        IzoBox{" "}
        <Type className="primary-text">
          {izobox.type === IzoboxType.basicWithoutWindow
            ? IzoboxType.basic
            : izobox.type}
        </Type>
      </h3>
      <IzoboxContainer>
        <Gallery>
          <Slider sliderPhotos={izobox.sliderPhotos} />
          <img src={izobox.photo} />
        </Gallery>
        <Properties>
          <IzoboxTypeSelection />
          {(izobox.type === IzoboxType.basic ||
            izobox.type === IzoboxType.basicWithoutWindow) && <BasicIzobox />}

          <FlexGap>
            <Button>Купить</Button>
            <Button sub>В кредит</Button>
          </FlexGap>
        </Properties>
      </IzoboxContainer>
    </div>
  );
};
