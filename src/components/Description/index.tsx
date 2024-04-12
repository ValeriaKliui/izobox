import { useContentModal } from "@hooks/useContentModal";
import { useIzobox } from "@hooks/useIzobox";
import { MediumText } from "@shared/Typography/Typography";
import { FC, useState } from "react";

import { TABS } from "./interfaces";
import {
  Iframe,
  Photo,
  PhotoContainer,
  Photos,
  Tab,
  Tabs,
  Video,
  Videos,
} from "./styled";

export const Description: FC = () => {
  const [choosenTab, setChoosenTab] = useState<TABS>(TABS.description);

  const chooseTab = (tab: TABS) => () => setChoosenTab(tab);
  const { izobox } = useIzobox();
  const { descriptionText, extraDescriptionComponent, galleryPhotos, videos } =
    izobox;
  const { onContentClick } = useContentModal();

  return (
    <div className="wrapper flex-col-gap">
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
          <MediumText>{descriptionText}</MediumText>
          {extraDescriptionComponent}
        </>
      )}
      {choosenTab === TABS.photo && (
        <Photos>
          {galleryPhotos.map((src, index) => (
            <PhotoContainer>
              <Photo
                src={src}
                key={src}
                onClick={() => onContentClick(index, galleryPhotos)}
              />
            </PhotoContainer>
          ))}
        </Photos>
      )}
      {choosenTab === TABS.video && (
        <Videos>
          {videos.map((videoSrc) => (
            <Video key={videoSrc}>
              <Iframe
                src={videoSrc}
                referrerPolicy="strict-origin-when-cross-origin"
                id="myFrame"
              />
            </Video>
          ))}
        </Videos>
      )}
    </div>
  );
};
