import { useAppDispatch } from "@hooks/typedHooks";
import { useIzobox } from "@hooks/useIzobox";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { Button } from "@shared/Button";
import { resetColorsChoosen } from "@store/izobox/izoboxSlice";

import { FlexGap } from "../styled";

export const IzoboxTypeSelection = () => {
  const { izobox, chooseIzobox } = useIzobox();
  const dispatch = useAppDispatch();

  const onButtonClick = (izoboxType: IzoboxType) => {
    chooseIzobox(izoboxType);
    dispatch(resetColorsChoosen());
  };

  return (
    <FlexGap>
      {Object.values(IzoboxType)
        .filter((type) => type !== IzoboxType.basicWithoutWindow)
        .map((izoboxType) => (
          <Button
            choosen={
              izobox.type === IzoboxType.basicWithoutWindow
                ? izoboxType === IzoboxType.basic
                : izobox.type === izoboxType
            }
            onClick={() => onButtonClick(izoboxType)}
            key={izoboxType}
          >
            {izoboxType}
          </Button>
        ))}
    </FlexGap>
  );
};
