import { useIzobox } from "@hooks/useIzobox";
import { MediumText } from "@shared/Typography/Typography";
import { FC, useState } from "react";

import { TABS } from "./interfaces";
import { Container, Iframe, Photos, Tab, Tabs, Video, Videos } from "./styled";

export const Description: FC = () => {
  const [choosenTab, setChoosenTab] = useState<TABS>(TABS.description);

  const chooseTab = (tab: TABS) => () => setChoosenTab(tab);
  const { izobox } = useIzobox();

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
          {izobox.galleryPhotos.map((src) => (
            <img src={src} key={src} />
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
    </Container>
  );
};
