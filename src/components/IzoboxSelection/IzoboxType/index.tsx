import { useIzobox } from "@hooks/useIzobox";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { Button } from "@shared/Button";

import { FlexGap } from "../styled";

export const IzoboxTypeSelection = () => {
  const { izobox, chooseIzobox } = useIzobox();

  return (
    <FlexGap>
      {Object.values(IzoboxType).map((izoboxType) => (
        <Button
          choosen={izobox.type === izoboxType}
          onClick={() => chooseIzobox(izoboxType)}
          key={izoboxType}
        >
          {izoboxType}
        </Button>
      ))}
    </FlexGap>
  );
};
