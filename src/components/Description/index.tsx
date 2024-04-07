import { MediumText } from "@shared/Typography/Typography";
import { FC, useState } from "react";
import { useIzobox } from "@hooks/useIzobox";
import { TABS } from "./interfaces";
import { Tab, Tabs, Container, Photos, Video, Videos, Iframe } from "./styled";

export const Description: FC = () => {
    const [choosenTab, setChoosenTab] = useState<TABS>(TABS.description);

    const chooseTab = (tab: TABS) => () => setChoosenTab(tab);
    const { izobox, chooseIzobox } = useIzobox();

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
                        <img src={src} />
                    ))}
                </Photos>
            )}
            {choosenTab === TABS.video && (
                <Videos>
                    {izobox.videos.map((videoSrc) => (
                        <Video>
                            <Iframe src={videoSrc} />
                        </Video>
                    ))}
                </Videos>
            )}
        </Container>
    );
};
