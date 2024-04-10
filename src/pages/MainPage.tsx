import { Customization } from "@components/Customization";
import { Description } from "@components/Description";
import { IzoboxSelection } from "@components/IzoboxSelection";
import { MainScreen } from "@components/MainScreen";
import { Review } from "@components/Review";
import { UpgradeBasic } from "@components/UpgradeBasic";
import { useIzobox } from "@hooks/useIzobox";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";

export const MainPage = () => {
  const { izobox } = useIzobox();

  return (
    <>
      <MainScreen />
      <Review />
      <IzoboxSelection />
      <Description />
      {izobox.type === IzoboxType.basic && <UpgradeBasic />}
      {izobox.type === IzoboxType.pro && <Customization />}
    </>
  );
};
