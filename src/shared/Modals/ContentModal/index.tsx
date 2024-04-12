import { useAppDispatch, useAppSelector } from "@hooks/typedHooks";
import {
  chooseContentIndex,
  selectContentIndexClicked,
  selectContentSrc,
} from "@store/app/appSlice";

import { Container, Img, ImgContainer, LeftArrow, RightArrow } from "./styled";

export const ContentModal = () => {
  const contentSrc = useAppSelector(selectContentSrc);
  const contentIndex = useAppSelector(selectContentIndexClicked);
  const dispatch = useAppDispatch();

  const showPrevContent = () => {
    const nextIndex = contentIndex - 1;
    const isMoreContent = nextIndex >= 0;
    dispatch(
      chooseContentIndex(isMoreContent ? nextIndex : contentSrc.length - 1),
    );
  };

  const showNextContent = () => {
    const nextIndex = contentIndex + 1;
    const isMoreContent = nextIndex < contentSrc.length;
    dispatch(chooseContentIndex(isMoreContent ? nextIndex : 0));
  };

  return (
    <Container>
      <LeftArrow onClick={showPrevContent} />
      <ImgContainer>
        <Img src={contentSrc[contentIndex]} />
      </ImgContainer>
      <RightArrow onClick={showNextContent} />
    </Container>
  );
};
