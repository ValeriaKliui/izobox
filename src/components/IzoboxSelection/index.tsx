import { Slider } from "@components/Slider";
import { ANCHORS } from "@constants/paths";
import { useAppDispatch, useAppSelector } from "@hooks/typedHooks";
import { useIzobox } from "@hooks/useIzobox";
import { IzoboxType } from "@providers/IzoboxProvider/interfaces";
import { Modal } from "@shared/Modals";
import { ColorModal } from "@shared/Modals/ColorModal";
import { closeColorModal, selectIsColorModalOpened } from "@store/app/appSlice";

import { BasicIzobox } from "./BasicIzobox";
import { IzoboxTypeSelection } from "./IzoboxType";
import { ProIzobox } from "./ProIzobox";
import { Gallery, IzoboxContainer, Properties, Type } from "./styled";

export const IzoboxSelection = () => {
  const { izobox } = useIzobox();

  const dispatch = useAppDispatch();
  const isModalOpened = useAppSelector(selectIsColorModalOpened);
  const onColorModalClose = () => {
    dispatch(closeColorModal());
  };

  return (
    <>
      <div className="wrapper" id={ANCHORS.custom}>
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
            {izobox.type === IzoboxType.pro && <ProIzobox />}
          </Properties>
        </IzoboxContainer>
      </div>
      <Modal isOpened={isModalOpened} onClose={onColorModalClose}>
        <ColorModal />
      </Modal>
    </>
  );
};
