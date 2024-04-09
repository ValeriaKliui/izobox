import { Modal } from "@components/Modals";
import { PhotoModal } from "@components/Modals/PhotoModal";
import { useIzobox } from "@hooks/useIzobox";
import { usePhotoModal } from "@hooks/usePhotoModal";
import { MediumText } from "@shared/Typography/Typography";
import { FC, useState } from "react";

import { TABS } from "./interfaces";
import { Container, Iframe, Photos, Tab, Tabs, Video, Videos } from "./styled";

export const Description: FC = () => {
  const [choosenTab, setChoosenTab] = useState<TABS>(TABS.description);

  const chooseTab = (tab: TABS) => () => setChoosenTab(tab);
  const { izobox } = useIzobox();
  const { onPhotoClick, onPhotoClose, isModalOpened } = usePhotoModal();

  return (
    <Container className="wrapper">
      <Tabs>
        {Object.values(TABS).map((tab) => (
          <Tab
            className="bold"
            $isChoosen={tab === choosenTab}
            onClick={chooseTab(tab)}
            key={tab}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>
      {choosenTab === TABS.description && (
        <>
          <MediumText>{izobox.descriptionText}</MediumText>
          {izobox.extraDescriptionComponent}
        </>
      )}
      {choosenTab === TABS.photo && (
        <Photos>
          {izobox.galleryPhotos.map((src, index) => (
            <img src={src} key={src} onClick={() => onPhotoClick(index)} />
          ))}
        </Photos>
      )}
      {choosenTab === TABS.video && (
        <Videos>
          {izobox.videos.map((videoSrc) => (
            <Video key={videoSrc}>
              <Iframe
                src={videoSrc}
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </Video>
          ))}
        </Videos>
      )}
      <Modal isOpened={isModalOpened} onClose={onPhotoClose}>
        <PhotoModal photosSrc={izobox.galleryPhotos} />
      </Modal>
    </Container>
  );
};
